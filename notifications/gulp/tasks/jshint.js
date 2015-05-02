'use strict';

var gulp   = require('gulp');
var jshint = require('gulp-jshint');

var files = [
	'app.js', 
	'config/*.js', 
	'store/*.js', 
	'resources/*.js', 
	'test/*.js', 
	'gulp/tasks/*.js', 
	'gulpfile.js'
];

gulp.task('lint', function() {
	return gulp.src(files)
		.pipe(jshint('.jshintrc'))
		.pipe(jshint.reporter('default'), { verbose: true })
		.pipe(jshint.reporter('fail'));
});
