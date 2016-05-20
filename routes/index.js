var express = require('express');
var router = express.Router();
// var http = require('http');
var request = require('request');




router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/yoda', function(req, res, next) {

  // will be assigned to rap lyric string
  var urlInput = "Hello There"

  function queryFormat(string) {
    newString = "sentence=" + string.split(' ').join('+');
    return newString;
  }

  var options = {
  url: 'https://yoda.p.mashape.com/yoda?' + queryFormat(urlInput),
  headers: {
    'Content-Type': 'text/plain',
    'X-Mashape-Key': '14NxsjwsZMmshIVvFwDV9UKvwgcjp1ZcceSjsneDQPbZO7FD62'
    }
  };

  function callback(error, response, body) {
    
    console.log(body);
  if (!error && response.statusCode == 200) {
    res.json(body);
    }
  }

  request(options, callback);

});

module.exports = router;
