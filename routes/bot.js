var express = require('express');
var router = express.Router();
var Twit = require('twit');
var request = require('request')
var foo = ""


var T = new Twit({
  consumer_key: 'fuLw9OfsAAxMkOAO0a79DiZWD',
  consumer_secret: 'iCueKLlf9fMzJP1SwGGGot2zSsmS8h8g71CkUPxsxbvL5IHqpl',
  access_token: '733684972658266112-njtufTzMk7SNilrsxSjYnVHzFkjL4s3',
  access_token_secret: 'JKjvGZLfcQ107JrIkA12ieupmJrMr11j9OL9cdAuo3Ctz'
});

router.get('/yoda', function(req, res, next) {

  var urlInput = "Looking at every ass, cheated on every test"

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
    console.log("in callback", typeof foo);

  if (!error && response.statusCode == 200) {
    res.json(body);
    }
    foo = body;

    T.post('statuses/update', { status: foo }, function(err, data, response){
      console.log('IN T POST', foo);
      if (err){
        return console.log(err);
      }
      console.log(data);
    })
  }

  request(options, callback)
});








// router.get('/', function(req, res, next){
//
//
// })

router.get('/kanye', function(req, res, next){
  request('http://www.kanyerest.xyz/api/track/good_morning', function(err, res, body){
    data = JSON.parse(body);
    console.log(data.lyrics);
  })
})

module.exports = router;
