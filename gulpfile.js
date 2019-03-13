const gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create();

// compile scss into css
function style() {
    // 1. locate scss file
    return gulp.src('./scss/**/*.scss')
    // 2. pass the file through the sass complile
    .pipe(sass().on('error', sass.logError))
    // 3. save compiled css
    .pipe(gulp.dest('./css'))
    // 4. stream changes on all browsers
    .pipe(browserSync.stream())
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;