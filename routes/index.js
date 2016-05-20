var express = require('express');
var router = express.Router();
// var http = require('http');
var request = require('request');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/yoda', function(req, res, next) {

    request('http://jsonplaceholder.typicode.com/posts/1', function(err, response, body){

      console.log('response ', body);

    });

});

module.exports = router;
