const { resolve } = require("path");
var path = require("path");
const HappyPack = require("happypack");
var config = {
  entry: ['/src/index.js'],
  output: {
    filename: "index.js",
    path: resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: '/src/index.js',
        exclude: /(node_modules)/,
        use: [
          {
            loader: "happypack/loader?id=babel",
          },
        ],
      },
    ],
  },
  plugins: [
    new HappyPack({
      id: "babel",
      loaders: [
        {
          loader: "babel-loader?cacheDirectory=true",
        },
      ],
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    progress: true,
    disableHostCheck: true,
  },
};
module.exports = config;