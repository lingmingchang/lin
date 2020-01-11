var gulp = require('gulp');
const {
    src,
    dest,
    series,
    watch,
    task
} = require("gulp")

const htmlclean = require("gulp-htmlclean"), // 压缩HTML
    imagemin = require('gulp-imagemin'), // 压缩img
    uglify = require('gulp-uglify'), // js压缩
    stripDebug = require('gulp-strip-debug'), // 去除调试语句
    less = require("gulp-less"), // less 转换 css
    cleanCss = require("gulp-clean-css"), // css 压缩
    postCss = require("gulp-postcss"), // css 加前缀
    autoprefixer = require("autoprefixer"), // css要加的前缀
    connect = require("gulp-connect"), // 开启服务器
    a = 1;




let seriesList = [];

let folder = {
    src: "src/",
    dist: "dist/"
}
task("html", () => {
    src(folder.src + "html/*")
    // .pipe(connect.reload())
    .pipe(htmlclean())
    .pipe(dest(folder.dist))
})

// gulp.task("html", gulp.series(function () {
//     gulp.src(folder.src + "html/*")
//         .pipe(gulp.dest(folder.dist + "html/"))
// }))

// gulp.task("html", function () {
//     gulp.src(folder.src + "html/*")
//         .pipe(connect.reload())
//         .pipe(htmlclean())
//         .pipe(gulp.dest(folder.dist))
// })
// function html() {
//     return src(folder.src + "html/*")
//         .pipe(connect.reload())
//         .pipe(htmlclean())
//         .pipe(dest(folder.dist));
// }
// gulp.task("js", function () {
//     gulp.src(folder.src + "js/*")
//         .pipe(connect.reload())
//         .pipe(stripDebug())
//         .pipe(uglify())
//         .pipe(gulp.dest(folder.dist + 'js'));
// })
// gulp.task("css", function () {
//     gulp.src(folder.src + "css/*")
//         .pipe(connect.reload())
//         .pipe(less())
//         .pipe(postCss([autoprefixer()]))
//         .pipe(cleanCss())
//         .pipe(gulp.dest(folder.dist + 'css'));
// })
// gulp.task("img", function () {
//     gulp.src(folder.src + "img/*")
//         .pipe(connect.reload())
//         .pipe(imagemin())
//         .pipe(gulp.dest(folder.dist + 'img'));
// })
// gulp.task("server", function () {
//     connect.server({
//         port: "9999",
//         livereload: true
//     })
// })

// gulp.task("watchs", function () {
//     gulp.watch(folder.src + "html/*", gulp.series("html"))
//     gulp.watch(folder.src + "js/*", gulp.series("js"))
//     gulp.watch(folder.src + "css/*", gulp.series("css"))
// })
// function js() {
//     return src(folder.src + "js/*")
//         .pipe(connect.reload())
//         .pipe(stripDebug())
//         .pipe(uglify())
//         .pipe(dest(folder.dist + 'js'));
// }

// function css() {
//     return src(folder.src + "css/*")
//         .pipe(connect.reload())
//         .pipe(less())
//         .pipe(postCss([autoprefixer()]))
//         .pipe(cleanCss())
//         .pipe(dest(folder.dist + 'css'));
// }

// function img() {
//     return src(folder.src + "img/*")
//         .pipe(connect.reload())
//         .pipe(imagemin())
//         .pipe(dest(folder.dist + 'img'));
// }

// function server() {
//     return connect.server({
//         port: "9999",
//         livereload: true
//     })
// }

// function watchHtml() {
//     return watch(folder.src + "html/*", ["html"])
// }

seriesList = ["html"];
// seriesList = ["html", "js", "css", "img", "server", "watchs"];
// gulp.task("default", gulp.parallel(...seriesList))

exports.default = series(...seriesList);

//   exports.default = defaultTask