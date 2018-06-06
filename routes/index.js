const express = require('express');
const router = express.Router();

var pageData = null;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("index", {
      title: "Home",
      pageData: pageData
  });
});

function setPageData(_pageData) {
    pageData = _pageData;
}

module.exports.router = router;
module.exports.setPageData = setPageData;