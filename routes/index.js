var express = require('express');
var _ = require('underscore');
var fs = require('fs');
var React = require('react');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  
	fs.readdir('posts', function(err, files) {

		var posts = _.map(files, function(file) {
			var content = fs.readFileSync('posts/' + file, 'utf8');
			return JSON.parse(content);
		});

		console.log(posts);
		
		res.render('index', {
			title: posts.length + 'posts',
			content: React.renderComponentToString(require('../components/ViewPost')({posts: posts}))
		});
	});

});

module.exports = router;
