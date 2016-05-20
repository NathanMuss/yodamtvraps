var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/yoda', function(req, res, next) {
  res.json(
    {
      yoda: "lyrics"
    }
  );
});


// router.get("https://yoda.p.mashape.com/yoda?sentence=You+will+learn+how+to+speak+like+me+someday.++Oh+wait.")
// .header("X-Mashape-Key", "14NxsjwsZMmshIVvFwDV9UKvwgcjp1ZcceSjsneDQPbZO7FD62")
// .header("Accept", "text/plain")
// .then(function (result) {
//   console.log(result.body);
// });

module.exports = router;
