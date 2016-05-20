var express = require('express');
var router = express.Router();
// var http = require('http');
var request = require('request');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/yoda', function(req, res, next) {

  var options = {
  url: 'https://yoda.p.mashape.com/yoda?sentence=You+will+learn+how+to+speak+like+me+someday.++Oh+wait.',
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
