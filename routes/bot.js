var express = require('express');
var router = express.Router();
var Twit = require('twit');

var T = new Twit({
  consumer_key: 'fuLw9OfsAAxMkOAO0a79DiZWD',
  consumer_secret: 'iCueKLlf9fMzJP1SwGGGot2zSsmS8h8g71CkUPxsxbvL5IHqpl',
  access_token: '733684972658266112-njtufTzMk7SNilrsxSjYnVHzFkjL4s3',
  access_token_secret: 'JKjvGZLfcQ107JrIkA12ieupmJrMr11j9OL9cdAuo3Ctz'
});

router.get('/', function(req, res, next){
  console.log('I exist');
  T.post('statuses/update', { status: "raps I tweet"}, function(err, data, response){
    if (err){
      return console.log(err);
    }
    console.log(data);
  })
})

module.exports = router;
