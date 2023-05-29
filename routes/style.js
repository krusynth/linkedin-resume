const express = require('express');
const router = express.Router();
const path = require('path');
const sass = require('sass');

/* GET home page. */
router.get('/style.css', function(req, res, next) {
  const result = sass.compile(path.join(__dirname, "../public/stylesheets/style.scss")).css;
  res.contentType('text/css');
  res.send(result);
});

module.exports = router;
