const express = require('express');
const mongoose = require('mongoose');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const PORT = 3000;
path = require('path');
//Enable css folder to use
app.use( express.static("public") );
app.use(express.static(__dirname + './views/css'));

//Bodyparser 
app.use(express.urlencoded({extended: false}))
//View enginge to render .ejs
app.set(expressLayouts);
app.set('view engine', 'ejs');
//Connect to MongoDB
mongoose.connect('mongodb+srv://admin:adminPassword@cluster0-mf5vb.mongodb.net/test?retryWrites=true&w=majority',
                { useNewUrlParser: true },
                () => {
                    console.log('Verbindung hergestellt!');
                });
//ROUTES
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
app.use('/bountyboard', require('./routes/bountyboard'));
app.use('/leaderboard', require('./routes/leaderboard'));
//Server hört auf Port 3000  //localhost:3000
app.listen(3000, console.log('Server gestartet auf Port ' + PORT));