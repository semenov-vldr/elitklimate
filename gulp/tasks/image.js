const imagemin = require('gulp-imagemin');
const changed = require('gulp-changed');

// module.exports = function() {
//   $.gulp.task('image:dev', function() {
//     return $.gulp
//       .src($.path.src + '/img/**/*.{png,svg,jpg,jpeg,gif,webp}')
//       .pipe(changed($.path.assets + '/img/'))
//       .pipe(imagemin({ verbose: true }))
//       .pipe($.gulp.dest($.path.assets + '/img/'))
//   })
// }


module.exports = function() {
  $.gulp.task('image:dev', function() {
    return $.gulp
      .src($.path.src + '/img/**/*.{png,svg,jpg,jpeg,gif,webp}')
      .pipe(changed($.path.assets + '/img/'))
      .pipe(imagemin([
        imagemin.gifsicle(),
        imagemin.mozjpeg(),
        imagemin.optipng(),
      ],
        { verbose: true }))
      .pipe($.gulp.dest($.path.assets + '/img/'))
  })
}

