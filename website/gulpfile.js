const path = require("path");
const gulp = require("gulp");
const pug = require("gulp-pug");
const less = require("gulp-less");
const clean = require("gulp-clean");
const watch = require("gulp-watch");

gulp.task("clean", function() {
    return gulp.src(["./build/**/*.html"]).pipe(clean({ force: true }));
});

gulp.task("copy:assets", function() {
    return gulp
        .src([
            "./src/**/*",
            "!./src/less",
            "!./src/less/**",
            "!./src/views",
            "!./src/views/**"
        ])
        .pipe(gulp.dest("./build/"));
});

gulp.task("less", function() {
    return gulp
        .src(["./src/less/*.less", "!./src/less/common.less"])
        .pipe(
            less({
                paths: [path.join(__dirname, "less", "includes")]
            })
        )
        .pipe(gulp.dest("./build/css/"));
});

gulp.task("pug", ["clean"], function() {
    return gulp
        .src(["src/views/*.pug"])
        .pipe(pug())
        .pipe(gulp.dest("./build/"));
});

gulp.task("watch", function() {
    gulp.watch("src/**/*.pug", ["pug"]);
    gulp.watch("src/**/*.less", ["less"]);
});

gulp.task("default", ["watch", "copy:assets", "less", "pug"]);
