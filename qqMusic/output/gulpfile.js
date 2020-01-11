// var gulp = require('gulp');
const {src, dest} = require("gulp")

let folder = {
    src: "src/",
    dist: "dist/"
}

// gulp.task("html", gulp.series(function () {
//     gulp.src(folder.src + "html/*")
//         .pipe(gulp.dest(folder.dist + "html/"))
// }))

// gulp.task("css", function(){
//     gulp.src(folder.src + "css/*")
//         .pipe(gulp.dest(folder.dist + "css/"))
// })

// gulp.task("js", function(){
//     gulp.src(folder.src + "js/*")
//         .pipe(gulp.dest(folder.dist + "js/"))
// })

// gulp.task('default', ["html"]);

// function defaultTask(cb) {
//     // place code for your default task here
//     cb();
//   }


function streamTask() {
    return src('*.js')
        .pipe(dest('output'));
}

exports.default = streamTask;

//   exports.default = defaultTask