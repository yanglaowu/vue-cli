const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    vue: ["vue", "vuex", "vue-router"],
    element: ["element-ui"]
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
    })
  ]
};
