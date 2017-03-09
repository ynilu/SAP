var express = require('express');
var Account = require('../models/account');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
    res.render('users', {});
});

router.get('/users.json', function(req, res, next) {

    Account.find({}, null, { skip: 0, limit: 2 }, function(err, results) {
        response = {
            pagination: {
                total: results.length,
                per_page: 3,
                current_page: 1,
                last_page: results.length / 2,
                from: 0,
                to: 1
            },
            data: results
        };
        if (err) {
            res.status(400).json(err);
            return;
        }
        console.log(results);
        res.status(200).json(response);
    });

});

router.post('/users', function(req, res, next) {

    Account.register(new Account({ username: req.body.username }), req.body.password, function(err, account) {
        if (err) {
            console.log(err);
            return res.status(400).json(err);
        }
        account.privilege = 0;
        return res.status(200);
    });

});

module.exports = router;
