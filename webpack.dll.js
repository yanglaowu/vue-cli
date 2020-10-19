const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: {
    core: ["vue", "vuex", "vue-router"],
    ui: ["element-ui", "element-ui/lib/theme-chalk/index.css", "normalize.css"],
    vendor: ["axios", "lodash", "crypto-js"] // 抽离vue 核心库
  },
  output: {
    path: path.resolve(__dirname, "./vendors"),
    filename: "[name].[hash:7].dll.js",
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
      filename: "[name].[hash:7].dll.css" // 提取出来的css文件路径以及命名
    })
  ],
  module: {
    rules: [
      {
        //解析.css文件
        test: /\.(sa|sc|c|le)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
          "less-loader"
        ]
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            publicPath: '../fonts',
            outputPath: './fonts',
            name: "[name].[hash:7].dll.[ext]"
          }
        }
      }
    ]
  }
};
