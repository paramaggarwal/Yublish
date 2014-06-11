var express = require('express');
var router = express.Router();
var React = require('react');
var fs = require('fs');

/* GET users listing. */
router.get('/create', function(req, res) {

	res.render('index', {
		title: 'Create a New Post',
		content: React.renderComponentToString(require('../components/CreatePost')())
	});

});

router.post('/create', function(req, res) {

	fs.writeFile('posts/' + req.body.id + '.json', JSON.stringify(req.body, null, 4), function() {
		res.redirect(302, '/');
	});

});

module.exports = router;
