var gulp = require('gulp');
var browserSynck = require('browser-sync').create();

gulp.task('browser-sync', function() {
    browserSynck.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch(["./*.html", "./css/*.css"]).on("change", browserSynck.reload);
});