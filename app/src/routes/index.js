var express = require('express');
var router = express.Router();

/* GET home (landing) page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello World!' });
});

/* GET news page. */
router.get('/news', function(req, res, next) {
  res.render('news', { title: 'News' });
});

/* GET post page. */
router.get('/post', function(req, res, next) {
  res.render('post', { title: 'Post' });
});

/* GET details page. */
router.get('/postdetails', function(req, res, next) {
  res.render('postdetails', { title: 'Title' });
});

module.exports = router;
