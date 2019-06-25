const express = require('express');
const router = express.Router();
const { ensureAuthenticated} = require('./../config/auth');
const User = require('../models/Users');

/*router.get('/', ensureAuthenticated, (req,res) => res.render('leaderboard', {
    user: req.user.name
}));*/

router.get('/', ensureAuthenticated, 
        function(req, res, next) {User.find().then(function(doc) {res.render('leaderboard', {items: doc});});}
);

module.exports = router;
