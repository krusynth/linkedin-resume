var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const Linkedin = require('node-linkedin')(
    process.env.LINKEDIN_ID,
    process.env.LINKEDIN_SECRET,
    '/'
  );

  res.render('index', { title: 'Express' });
});

router.get('/loopback', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
