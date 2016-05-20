var express = require('express');
var router = express.Router();
var request = require('request-promise');
var Twit = require('twit');
var tweet = "";

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/yoda', function(req, res, next) {

  var albums = ['the_college_dropout', 'late_registration', 'graduation', '808s_&amp;_heartbreak', 'my_beautiful_dark_twisted_fantasy', 'watch_the_throne', 'yeezus', 'the_life_of_pablo'];
  var urlInput;

  function pickRandom(length) {
    return Math.floor(Math.random() * length);
  }

  function queryFormat(string) {
    var newString = "sentence=" + string.split(' ').join('+');
    console.log(newString);
    return newString;
  }

    request('http://www.kanyerest.xyz/api/album/' + albums[0])

    .then(function(body) {

      //Kanye Data
      data = JSON.parse(body);

      //Pick random song
      var songLyrics = data.result[pickRandom(data.result.length)].lyrics.split('\n');

      //Pick random line
      var line = songLyrics[pickRandom(songLyrics.length)];

      return line
    })

    .then(function(line) {

        var urlInput = line;

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

        request(options)

        .then(function(data) {

          console.log(data);

          tweet = data;

          var T = new Twit({
            consumer_key: 'fuLw9OfsAAxMkOAO0a79DiZWD',
            consumer_secret: 'iCueKLlf9fMzJP1SwGGGot2zSsmS8h8g71CkUPxsxbvL5IHqpl',
            access_token: '733684972658266112-njtufTzMk7SNilrsxSjYnVHzFkjL4s3',
            access_token_secret: 'JKjvGZLfcQ107JrIkA12ieupmJrMr11j9OL9cdAuo3Ctz'
          })

          T.post('statuses/update', { status: tweet }, function(err, data, response){
            console.log('IN T POST', tweet);
            if (err){
              return console.log(err);
            }
            // console.log(data);
          })
        })
      })
      // console.log(line);
    })
    //   // Options
    //   var options = {
    //   url: 'https://yoda.p.mashape.com/yoda?' + queryFormat(line),
    //   headers: {
    //     'Content-Type': 'text/plain',
    //     'X-Mashape-Key': '14NxsjwsZMmshIVvFwDV9UKvwgcjp1ZcceSjsneDQPbZO7FD62'
    //     }
    //   };
    // });
    //
    // function callback(error, response, body) {
    //   console.log(body);
    // if (!error && response.statusCode == 200) {
    //   res.json(body);
    //   }
    // }

  // request(options, callback);

module.exports = router;
