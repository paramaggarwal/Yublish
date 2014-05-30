var express = require('express');
var router = express.Router();
var React = require('react');

/* GET users listing. */
router.get('/create', function(req, res) {
	res.send(React.renderComponentToString(require('../components/createPost.jsx')()));
});

module.exports = router;
