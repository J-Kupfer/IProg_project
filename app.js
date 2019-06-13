const express = require('express');
const mongoose = require('mongoose');
const app = express();
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


//Server hört auf Port 3000
app.listen(3000);