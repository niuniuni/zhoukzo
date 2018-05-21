var gulp = require('gulp');
var server = require('gulp-webserver');
gulp.task('ser', function() {
    gulp.src('src')
        .pipe(server({
            port: 8000,
            host: 'localhost',
            livereload: true,
            middleware: function(req, res, next) {
                //var obj = url.paths(req.url, true).pathname;
                next()
            }

        }))
})