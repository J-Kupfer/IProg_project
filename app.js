const express = require('express');
const mongoose = require('mongoose');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
path = require('path');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');




//Passport config
require('./config/passport')(passport);
//Connect to MongoDB
mongoose.connect('mongodb+srv://admin:adminPassword@cluster0-mf5vb.mongodb.net/test?retryWrites=true&w=majority',
                { useNewUrlParser: true },
                () => {
                    console.log('Verbindung hergestellt!');
                });
//View enginge to render .ejs
app.set(expressLayouts);
app.set('view engine', 'ejs');
//Bodyparser 
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
// Express session
app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
    })
);
//Passport middleware
app.use(passport.initialize());
app.use(passport.session());
//Connect to flash
app.use(flash());
// Globale variablen 
app.use(function(req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});
//Enable css folder to use
app.use( express.static("public") );
app.use(express.static(__dirname + './views/css'));
//ROUTES
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
app.use('/bountyboard', require('./routes/bountyboard'));
app.use('/leaderboard', require('./routes/leaderboard'));
//Server hört auf Port 3000  //localhost:3000
app.listen(3000, console.log('Server gestartet auf Port ' + PORT));