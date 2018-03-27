'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('auth/login', { title: 'Express' });
});

router.post('/login', function(req, res, next) {
  res.render('auth/login', { title: 'Day la post' });
});
module.exports = router;