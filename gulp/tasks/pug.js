const pug = require('gulp-pug');
const changed = require("gulp-changed");

module.exports = function() {
  $.gulp.task('pug', function () {
    return $.gulp
      .src($.path.src + '/pages/**/*.pug')
      .pipe(changed($.path.dist))
      .pipe(pug({
        pretty: true,
      }))
      .pipe($.gulp.dest($.path.dist))
      //.on('end', $.browserSync.reload)
  })
}
