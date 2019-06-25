const express = require('express');
const router = express.Router();
const {ensureAuthenticated} = require('./../config/auth');
const Post = require('../models/Posts');
const mongoose = require('mongoose');

router.get('/', ensureAuthenticated, 
        function(req, res, next) {Post.find().then(function(doc) {res.render('BountyBoard', {items: doc});});}
);

//erhalten der Daten von MongoDB und freigeben
//router.get('/', (req,res) => res.render('BountyBoard', {user: req.user.name}),
//);

//(req,res) => res.render('BountyBoard', {user: req.user.name}),

module.exports = router;
