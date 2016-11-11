var browserSync = require("browser-sync"),
	gulp = require("gulp"),
	gulpClean = require("gulp-clean-css"),
	gulpConcat = require("gulp-concat"),
	gulpDest = require('gulp-dest'),
	gulpIf = require("gulp-if"),
	gulpSass = require("gulp-sass"),
	gulpUglify = require("gulp-uglify");


gulp.task('css:compile', function() {
	return gulp.src([
		'src/index.scss',
		'src/styles/common/*.scss',
		'src/styles/shared/*.scss',
		'src/styles/pages/*.scss',
		'src/styles/modules/*.scss',
		'src/styles/components/*.scss'
		])
		.pipe(gulpSass())
		.pipe(gulpClean())
		.pipe(gulp.dest('bundle/css/**/*.css'));
});

gulp.task('js:app:build', function() {
	return gulp.src([
				'src/scripts/todo-app/index.js',
				'src/scripts/todo-app/todo-list/*.js',
				'src/scripts/todo-app/todo-list/*.html',
				'src/scripts/todo-app/todo-item/*.js',
				'src/scripts/todo-app/todo-item/*.html'
			])
			.pipe(gulpUglify())
			.pipe(gulp.dest('bundle/js'));
});


gulp.task('fonts:transfer', function() {
	return gulp.src([
			'src/fonts/**/*.*',
		])
		.pipe(gulp.dest('bundle/fonts'));
});

gulp.task('templates:transfer', function() {
	return gulp.src([
			'src/index.html',
		])
		.pipe(gulp.dest('bundle'));
});

gulp.task('run:server', function () {
	browserSync.init({
		server: './bundle',
		port: 8080
	});
});

gulp.task('default', ['fonts:transfer', 'css:compile', 'js:app:build','templates:transfer']);





