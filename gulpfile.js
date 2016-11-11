var browserSync = require('browser-sync'),
    del = require('del'),
	gulp = require('gulp'),
	gulpClean = require('gulp-clean-css'),
	gulpConcat = require('gulp-concat'),
	gulpDest = require('gulp-dest'),
	gulpIf = require('gulp-if'),
	gulpRigger = require('gulp-rigger'),
	gulpSass = require('gulp-sass'),
	gulpSourceMaps = require('gulp-sourcemaps'),
	gulpUglify = require('gulp-uglify');

var config = require('./gulp.config.js');

gulp.task('templates:build', function() {
    return gulp.src(config.paths.src.html)
        .pipe(gulpRigger())
        .pipe(gulp.dest(config.paths.build.html))
        .pipe(browserSync.stream());
});

gulp.task('js:app:build', function() {
	return gulp.src(config.paths.src.js.app)
		.pipe(gulpRigger())
		.pipe(gulpSourceMaps.init())
		.pipe(gulpUglify())
		.pipe(gulpSourceMaps.write())
		.pipe(gulp.dest(config.paths.build.js.app))
        .pipe(browserSync.stream());
});

gulp.task('js:lib:build', function() {
    return gulp.src(config.paths.src.js.lib)
        .pipe(gulp.dest(config.paths.build.js.lib))
        .pipe(browserSync.stream());
});

gulp.task('css:build', function() {
    return gulp.src(config.paths.src.css)
        .pipe(gulpSourceMaps.init())
        .pipe(gulpSass())
        .pipe(gulpClean())
        .pipe(gulpSourceMaps.write())
        .pipe(gulp.dest(config.paths.build.css))
        .pipe(browserSync.stream());
});

gulp.task('fonts:build', function () {
    return gulp.src(config.paths.src.fonts)
        .pipe(gulp.dest(config.paths.build.fonts))
        .pipe(browserSync.stream());
});

gulp.task('watch', function(){
    gulp.watch(config.paths.watch.js.app, ['js:app:build']);
    gulp.watch(config.paths.watch.css, ['css:build']);
    gulp.watch(config.paths.watch.html, ['templates:build']);
    gulp.watch(config.paths.watch.fonts, ['fonts:build']);
});

gulp.task('run:server', function () {
    browserSync.init(config.serverConfig);
});

gulp.task('clean:build', function () {
    del(config.paths.clean);
});


gulp.task('build',
    [
        'clean:build',
        'templates:build',
        'js:app:build',
        'css:build',
        'fonts:build'
    ]
);

gulp.task('default',
    [
        'build',
        'run:server',
        'watch'
    ]
);







