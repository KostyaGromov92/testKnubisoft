/**
 * Created by Костя on 28.03.2017.
 */

var gulp = require('gulp'),
    jade = require('gulp-jade'),
    affected = require('gulp-jade-find-affected'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    plumber = require('gulp-plumber'),
    newer = require('gulp-newer'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    uglifycss = require('gulp-uglifycss');

gulp.task('sass', function(){ // Создаем таск Sass
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('css-libs', function() {
    return gulp.src(['dist/css/style.css','dist/css/jquery.bxslider.css'])
        .pipe(concat('style.min.css'))
        .pipe(uglifycss())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('scripts', function() {
    return gulp.src([
        'app/script/script.js', // Берем jQuery
        'app/script/jquery.bxslider.min.js'
    ])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('jade', function () {
    return gulp.src(['app/jade/*.jade','!app/jade/_*.jade'])
        .pipe(newer('app/jade/*.jade'))
        .pipe(plumber())
        .pipe(jade({
            pretty: '\t'
        }))
        .on('error', console.log)
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['sass', 'jade','scripts'], function() {
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/jade/*.jade', ['jade']);
});

gulp.task('default', ['watch']);