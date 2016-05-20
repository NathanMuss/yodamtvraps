var express = require('express');
var router = express.Router();
// var http = require('http');
var request = require('request');




router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/yoda', function(req, res, next) {

  var albums = ['the_college_dropout', 'late_registration', 'graduation', '808s_&amp;_heartbreak', 'my_beautiful_dark_twisted_fantasy', 'watch_the_throne', 'yeezus', 'the_life_of_pablo'];
  var urlInput;

  function pickRandom(length) {
    return Math.floor(Math.random() * length);
  }

    request('http://www.kanyerest.xyz/api/album/' + albums[0], function(err, res, body){
      data = JSON.parse(body);
      var songLyrics = data.result[pickRandom(data.result.length)].lyrics.split('\n');
      var line = songLyrics[pickRandom(songLyrics.length)];
      console.log(line);
      urlInput = line;
    });

  // will be assigned to rap lyric string

  function queryFormat(string) {
    var newString = "sentence=" + string.split(' ').join('+');
    console.log(newString);
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
