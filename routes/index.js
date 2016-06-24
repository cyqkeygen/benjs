var express = require('express');
var router = express.Router();
var Article = require('../models/articles');
var l = require('lodash');
var crypto = require('crypto');

/* GET home page. */
router.get('/articles', function(req, res, next) {
  Article.find({}, function(err, as){
    if(err) throw err;
    res.json({success: true, code: 0, articles: as});
  })
});

router.get('/articles/:id', function(req, res, next) {
  Article.findOne({_id: req.params.id}, function(err, a){
    if(err) throw err;
    res.json({success: true, code: 0, articles: a});
  })
});

module.exports = router;
