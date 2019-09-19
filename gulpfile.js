const gulp = require('gulp')
const compiler = require('./index')
const rename = require('gulp-rename')

exports.default = function () {
    return gulp.src('example/index.xml')
        .pipe(compiler())
        .pipe(rename({ extname: '.html' }))
        .pipe(gulp.dest('example'))
}