var browserSync = require("browser-sync"),
	gulp = require("gulp"),
	gulpClean = require("gulp-clean-css"),
	gulpConcat = require("gulp-concat"),
	gulpDest = require('gulp-dest'),
	gulpIf = requie("gulp-if"),
	gulpSass = require("gulp-sass"),
	gulpUglify = require("gulp-uglify");


gulp.task('css:compile', function() {
	return gulp.src(['styles/**/**.scss'])
			.pipe(gulpSass())
			.pipe(gulpConcat())
			.pipe(gulpClean())
			.pipe(gulp.dest('bundle/css/style.bundle.css'));
});

gulp.task('js:app', function() {
	return gulp.src([
				'scripts/todo-app/index.js',
				'scripts/todo-app/todo-list/*.js',
				'scripts/todo-app/todo-item/*.js'
			])
			.pipe(gulpConcat())
			.pipe(gulpUglify())
			.pipe(gulp.dest('bundle/js/todo-app.bundle.js'));
});





