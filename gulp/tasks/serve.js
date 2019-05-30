'use strict';

module.exports = () => {
  $.gulp.task('serve', () => {
    $.browserSync.init({
      open: true,
      server: $.config.root
    });

    $.browserSync.watch([`${$.config.root}/**/*.*`, '!**/*.css'], $.browserSync.reload);
  });
};
