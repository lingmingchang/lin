var gulp = require('gulp');
const {
    src,
    dest,
    series,
    watch,
    task,
    parallel
} = require("gulp")

const htmlclean = require("gulp-htmlclean"), // 压缩HTML
    imagemin = require('gulp-imagemin'), // 压缩img
    uglify = require('gulp-uglify'), // js压缩
    babel = require('gulp-babel'),
    stripDebug = require('gulp-strip-debug'), // 去除调试语句
    less = require("gulp-less"), // less 转换 css
    sass = require("gulp-sass"), // less 转换 css
    cleanCss = require("gulp-clean-css"), // css 压缩
    postCss = require("gulp-postcss"), // css 加前缀
    autoprefixer = require("autoprefixer"), // css要加的前缀
    connect = require("gulp-connect"), // 开启服务器
    a = 1;

sass.compiler = require("node-sass");

const folder = {
    src: "src/",
    dist: "dist/"
}

let seriesList = [];

// 判断当前环境变量
let devMod = process.env.NODE_ENV !== "development";
// export NODE_ENV=development  设置环境变量(注意等号不能有空格)

console.log(devMod)
function html() {
    let page = src(folder.src + "*.html");

    if (!devMod) page.pipe(htmlclean())
    page.pipe(dest(folder.dist));
    page.pipe(connect.reload());
    return page;
}

function css() {
    let page = src(folder.src + "css/*.scss");

    // page.pipe(less());
    // page.pipe(postCss([autoprefixer()]))
    // if(!devMod) page.pipe(cleanCss());
    page.pipe(sass({
        outputStyle: "compressed"
    }));
    page.pipe(dest(folder.dist + "css/"));
    page.pipe(connect.reload());
    return page;
}

function js() {
    let page = src(folder.src + "js/*");

    // if (!devMod) {
    //     page.pipe(stripDebug())
    //     page.pipe(uglify())
    // }

    page.pipe(dest(folder.dist + 'js'));
    page.pipe(connect.reload())
    return page;
}

function img() {
    let page = src(folder.src + "img/*");
    page.pipe(imagemin())
    page.pipe(gulp.dest(folder.dist + 'img'));
    page.pipe(connect.reload())
    return page;
}


// watch(folder.src, series(html, css, js, img));
watch(folder.src, series(img, css, js, html));

connect.server({
    port: "8856",
    livereload: true
})

seriesList = [html, css, js, img];
// seriesList = [img, css, js, html];

exports.default = series(...seriesList);