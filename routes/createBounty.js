const express = require('express');
const router = express.Router();
const {ensureAuthenticated} = require('./../config/auth');

router.get('/', (req,res) => {
    res.render('createBounty');
});

router.post('/createNew', (req,res) => {
    console.log(req.body);
});



module.exports = router;