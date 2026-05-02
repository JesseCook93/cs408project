var express = require('express');
var router = express.Router();

/**
 * GET requests
 */

/* GET home (landing) page. */
router.get('/', function(req, res, next) {
  res.render('landing', { title: 'Welcome to Boards!', description: 'Share anything you wish with your local community or group. With your own instance of Boards, you can share anything you wish with your local community or group. Simply share this with whoever you wish, and hit "Get Started" to begin posting!'});
});

/* GET news page. */
router.get('/news', function(req, res, next) {
  const newsPosts = req.db.getRecentNews();
  res.render('news', { title: 'News', description: '', news: newsPosts });
});

/* GET post page. */
router.get('/post', function(req, res, next) {
  res.render('post', { title: 'Post', description: 'Placeholder (Will be removed in future checkpoints)' });
});

/* GET postdetails page. */
router.get('/postdetails/:id', function(req, res, next) {
  const newsId = req.params.id;
  const newsItem = req.db.getNewsById(newsId);
  if (!newsItem) {
    return res.status(404).render('error', { title: 'Not Found', message: 'News item not found' });
  }
  res.render('postdetails', { title: newsItem.title, description: '', newsItem: newsItem });
});

/**
 * POST requests
 */

/* Post request to delete news item. */
router.post('/news/delete/:id', function(req, res, next) {
  const newsId = req.params.id;
  req.db.deleteNews(newsId);
  res.redirect('/news');
});

/* Post request to create news item. */
router.post('/post', function(req, res, next) {
  const { title, poster, details } = req.body;
  req.db.createNews(title, poster, details);
  res.redirect('/news');
}); 

module.exports = router;
