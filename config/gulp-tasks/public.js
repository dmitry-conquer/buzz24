export const toPublic = () => {
   return app.gulp
     .src(app.path.src.public)
     .pipe(app.gulp.dest(app.path.build.public));
 };
 