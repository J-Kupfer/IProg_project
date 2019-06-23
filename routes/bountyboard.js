const express = require('express');
const router = express.Router();
const {ensureAuthenticated} = require('./../config/auth');

router.get('/', ensureAuthenticated, (req,res) => res.render('BountyBoard', {
    user: req.user.name
}));

module.exports = router;
