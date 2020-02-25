const pro = process.env.NODE_ENV === "production";
const path = require("path");
module.exports = {
    productionSourceMap: false, // 是否打包sourcemap
    outputDir: "./dist", // 输出目录
    // publicPath:process.env.NODE_ENV === "production" ? "http://www.duyiedu.com" : "./"
    publicPath: "./",
    // assetsDir:"assets"
    chainWebpack: config => {
        config.resolve.alias.set("_v", path.resolve(__dirname, "src/views"))
    },
    pluginOptions:{
        
    }

}