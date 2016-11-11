var browserSync = require("browser-sync"),
	gulp = require("gulp"),
	gulpClean = require("gulp-clean-css"),
	gulpConcat = require("gulp-concat"),
	gulpDest = require('gulp-dest'),
	gulpIf = require("gulp-if"),
	gulpRigger = require('gulp-rigger'),
	gulpSass = require("gulp-sass"),
	gulpUglify = require("gulp-uglify");

var config = require('./gulp.config.js');

gulp.task('templates:transfer', function() {
    return gulp.src(config.paths.src.html)
        .pipe(gulpRigger())
        .pipe(gulp.dest(config.paths.build.html));
});


gulp.task('default', ['templates:transfer']);





