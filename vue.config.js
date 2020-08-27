const fs = require("fs");
const path = require("path");
const webpack = require("webpack");

const AddAssetHtmlWebpackPlugin = require("add-asset-html-webpack-plugin");

const plugins = [];

const files = fs.readdirSync(path.resolve(__dirname, "./vendors"));

files.forEach((file) => {
  if (/.*\.dll.js/.test(file)) {
    plugins.push(
      new AddAssetHtmlWebpackPlugin({
        filepath: path.resolve(__dirname, "./vendors", file),
        publicPath: "/vendors/js",
        outputPath: "/vendors/js",
      })
    );
  }
  if (/.*\.dll.css/.test(file)) {
    plugins.push(
      new AddAssetHtmlWebpackPlugin({
        filepath: path.resolve(__dirname, "./vendors", file),
        publicPath: "/vendors/css",
        outputPath: "/vendors/css",
        typeOfAsset: "css",
      })
    );
  }
  if (/.*\.manifest.json/.test(file)) {
    plugins.push(
      new webpack.DllReferencePlugin({
        context: process.cwd(),
        manifest: path.resolve(__dirname, "./vendors", file),
      })
    );
  }
});

module.exports = {
  assetsDir: "assets",
  configureWebpack: () => ({
    plugins: [...plugins],
  }),
  devServer: {
    host: "0.0.0.0",
    port: 8000,
  },
};
