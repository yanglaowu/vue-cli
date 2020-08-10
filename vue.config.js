const fs = require("fs");
const path = require("path");
const webpack = require("webpack");

const AddAssetHtmlWebpackPlugin = require("add-asset-html-webpack-plugin");
// 打包速度分析
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
// 打包提及分析
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const plugins = [];

const files = fs.readdirSync(path.resolve(__dirname, "./vendors"));

files.forEach(file => {
  if (/.*\.dll.js/.test(file)) {
    plugins.push(
      new AddAssetHtmlWebpackPlugin({
        filepath: path.resolve(__dirname, "./vendors", file),
        publicPath: "./vendors/js",
        outputPath: "./vendors/js"
      })
    );
  }
  if (/.*\.dll.css/.test(file)) {
    plugins.push(
      new AddAssetHtmlWebpackPlugin({
        filepath: path.resolve(__dirname, "./vendors", file),
        publicPath: "./vendors/css",
        outputPath: "./vendors/css",
        typeOfAsset: "css"
      })
    );
  }
  if (/.*\.manifest.json/.test(file)) {
    plugins.push(
      new webpack.DllReferencePlugin({
        context: process.cwd(),
        manifest: path.resolve(__dirname, "./vendors", file)
      })
    );
  }
});

const smp = new SpeedMeasurePlugin();

module.exports = {
  assetsDir: "assets",
  configureWebpack: () => {
    if (process.env.NODE_ENV === "production") {
      plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: "static",
          openAnalyzer: true
        })
      );
      return smp.wrap({
        plugins: [...plugins]
      });
    }
    return { plugins: [...plugins] };
  }
};
