/**
 * Created by Костя on 28.03.2017.
 */

var gulp = require('gulp'),
    jade = require('gulp-jade'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename');

gulp.task('sass', function(){ // Создаем таск Sass
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('css-libs', function() {
    return gulp.src('dist/css/*.css')
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('jade', function() {
    return gulp.src('app/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['sass', 'jade'], function() {
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/*.jade', ['jade']);
});

gulp.task('default', ['watch']);