const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: {
    vue: ["vue", "vuex", "vue-router"], // 抽离vue 核心库
    element: ["element-ui"] // 抽离ui库, css由于做了按需加在 不用单独处理
    // common: [path.join(__dirname, "./src/styles/index.scss")] // 抽离全局样式
  },
  output: {
    path: path.resolve(__dirname, "./vendors"),
    filename: "[name].dll.js",
    library: "[name]"
  },
  performance: {
    hints: false
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DllPlugin({
      name: "[name]",
      path: path.resolve(__dirname, "./vendors/[name].manifest.json"),
      context: process.cwd()
    }),
    new MiniCssExtractPlugin({
      filename: "[name].dll.css" // 提取出来的css文件路径以及命名
    })
  ],
  module: {
    rules: [
      {
        //解析.css文件
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  }
};
