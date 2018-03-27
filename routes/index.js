'use strict';
var express = require('express');
var router = express.Router();
var db = require('../config/database.js')

/* GET home page. */


db.Users.findOne({  raw: true,
  name: 'cuong'
})
.then(cuong => {
  router.get('/', function(req, res, next) {
    console.log( cuong );
    res.render('index', { cuong: cuong});
  });
});


module.exports = router;
