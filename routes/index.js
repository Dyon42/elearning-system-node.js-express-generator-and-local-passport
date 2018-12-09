var express = require('express');
var router = express.Router();

var Class = require('../models/class');


router.get('/addclass', function(req, res, next){
	res.render('classes/add');
});



router.post('/addclass', function(req, res){


var classTitle = req.body.class_title;
var classDescription = req.body.class_description;
var classInstructor = req.body.class_instructor;


var newClass = new Class({
	title: classTitle,
	description:classDescription,
	instructor: classInstructor,
	lessons:[]
});

async.parallel([newClass.save]);



req.flash('success_msg', 'You are now registered to teach this class');
res.redirect('/');
});









/* GET home page. */
router.get('/', function(req, res, next) {
	Class.getClasses(function(err, classes){
		res.render('index', { classes: classes });
	},3);
});

module.exports = router;
