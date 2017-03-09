var express = require('express');
var passport = require('passport');
var Account = require('../models/account');
var router = express.Router();

router.get('/contest', function(req, res) {
    res.render('contest', { });
});

router.post('/contest', function(req, res) {
    res.render('contest', { });
});

router.put('/contest', function(req, res) {
    res.render('contest', { });
});

module.exports = router;
