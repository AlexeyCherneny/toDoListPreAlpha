var gulp = require("gulp"),
    sass = require("gulp-sass"),
    browserSync = require("browser-sync"),
    rigger = require("gulp-rigger");


gulp.task("html:build", function() {
  return gulp.src("src/index.html")
    .pipe(rigger())
    .pipe(gulp.dest("build"))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task("css:build", function() {
  return gulp.src("src/scss/main.scss")
    .pipe(rigger())
    .pipe(sass())
    .pipe(gulp.dest("build/css"))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task("js:build", function() {
  return gulp.src("src/js/*.js")
  .pipe(rigger())
  .pipe(gulp.dest("build/js"))
  .pipe(browserSync.reload({
    stream: true
  }))
});

gulp.task("img:build", function() {
  return gulp.src("src/img/*.+(jpg|jpeg|png)")
    .pipe(gulp.dest("build/img"))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task("browserSync", function() {
  browserSync.init({
    server: {
      baseDir: "build"
    },
  })
});

gulp.task("watch", ["browserSync", "css:build", "js:build", "img:build", ], function() {
  gulp.watch("src/**/*.html", ["html:build"]);
  gulp.watch("src/scss/**/*.scss", ["css:build"]);
  gulp.watch("src/js/**/*.js", ["js:build"]);
  gulp.watch("src/img/*.+(jpg|jpeg|png)", ["image:build"]);
} );
