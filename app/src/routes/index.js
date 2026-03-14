var express = require('express');
var router = express.Router();

/* GET home (landing) page. */
router.get('/', function(req, res, next) {
  res.render('landing', { title: 'Welcome to Boards!', description: 'Share anything you wish with your local community or group.With your own instance of Boards, you can share anything you wish with your local community or group. Simply sharae this with whoever you wish, and hit "Get Started" to begin posting!'});
});

/* GET news page. */
router.get('/news', function(req, res, next) {
  res.render('news', { title: 'News', description: 'Placeholder (Will be removed in future checkpoints)' });
});

/* GET post page. */
router.get('/post', function(req, res, next) {
  res.render('post', { title: 'Post', description: 'Placeholder (Will be removed in future checkpoints)' });
});

/* GET details page. */
router.get('/postdetails', function(req, res, next) {
  res.render('postdetails', { title: 'Title', description: 'Placeholder (Will be removed in future checkpoints)' });
});

module.exports = router;
