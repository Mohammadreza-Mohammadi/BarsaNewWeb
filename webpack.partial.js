const path = require("path");
const CompressionPlugin = require("compression-webpack-plugin");
const BrotliPlugin = require(`brotli-webpack-plugin`);
const zopfli = require("@gfx/zopfli");
const zlib = require("zlib");
module.exports = {
  module: {
    rules: [
      {
        test: require.resolve("rxjs"),
        loader: "expose-loader",
        options: {
          exposes: ["rxjs"],
        },
      },
    ],
  },
  output: {
    libraryTarget: "window",
  },
  resolve: {
    alias: {
      rxjs: "rxjs",
    },
  },
  plugins: [
    new CompressionPlugin({
      filename: "[path][base].gz",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 0,
      minRatio: 1,
    }),
    new CompressionPlugin({
      filename: "[path][base].br",
      algorithm: "brotliCompress",
      test: /\.(js|css|html|svg)$/,
      compressionOptions: {
        params: {
          [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
        },
      },
      threshold: 0, // means all size or can be 1024
      minRatio: 1, //means process assets that are smaller than the original.
    }),
  ],
};
