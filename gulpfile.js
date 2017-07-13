var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var csso = require('gulp-csso');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var livereload = require('gulp-livereload');
var rename = require('gulp-rename');

var base = './';
var source = base + 'sources/';
var compiled = base + 'public/';

var CSS_FILENAME = 'main.css';
var JS_VENDOR_FILENAME = 'vendor.js';
var JS_MAIN_FILENAME = 'all.js';

var AUTOPREFIXER_BROWSERS = [
    'ie >= 9',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
];

gulp.task('styles', function() {
    return sass([source + 'styles/main.scss'])
        .on('error', function(err) { console.log(err.message); })
        .pipe(autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
        .pipe(csso())
        .pipe(rename(CSS_FILENAME))
        .pipe(gulp.dest(compiled + 'styles'))
        .pipe(livereload());
});

gulp.task('vendor', function() {
    return gulp.src([source + 'scripts/vendor/*.js'])
        .pipe(concat('vendor.js'))
        .pipe(rename(JS_VENDOR_FILENAME))
        .pipe(gulp.dest(compiled + 'scripts'))
        .pipe(livereload());
});

gulp.task('scripts', function() {
    return gulp.src([source + 'scripts/*.js', source + 'scripts/controllers/*.js', source + 'scripts/services/*.js', source + 'scripts/config/*.js'])
        .pipe(concat('all.js'))
        .pipe(rename(JS_MAIN_FILENAME))
        .pipe(gulp.dest(compiled + 'scripts'))
        .pipe(livereload());
});

gulp.task('watch', ['styles', 'scripts'], function() {
    livereload.listen();
    gulp.watch(source + 'styles/**/*.scss', ['styles']);
    gulp.watch(source + 'scripts/**/*.js', ['scripts']);
});
