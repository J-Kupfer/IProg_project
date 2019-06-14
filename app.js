const express = require('express');
const mongoose = require('mongoose');
const app = express();
path = require('path');
//Enable css folder to use
app.use(express.static(__dirname + './views/css'));
//View enginge to render .ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//Connect to MongoDB
mongoose.connect('mongodb+srv://admin:adminPassword@cluster0-mf5vb.mongodb.net/test?retryWrites=true&w=majority',
                { useNewUrlParser: true },
                () => {
                    console.log('Verbindung hergestellt!');
                });
//ROUTES
app.get('/', (req,res) =>{
    res.send('HelloWorld');
});
app.get('/Home', (req, res) =>{
    res.send('We are on Home');
});

app.get('/index', function(req, res) {
    res.render('index');
  });
  


//Server hört auf Port 3000  //localhost:3000
app.listen(3000);