var express = require('express');
var router = express.Router();
var React = require('react');

/* GET users listing. */
router.get('/create', function(req, res) {

	res.render('index', {
		title: 'Express',
		content: React.renderComponentToString(require('../components/CreatePost')())
	});

});

module.exports = router;
