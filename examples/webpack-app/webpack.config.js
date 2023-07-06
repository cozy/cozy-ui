var path = require("path");
module.exports = {
  entry: {
    app: ["./index.js"]
  },
  mode: process.env.NODE_ENV == 'production' ? 'production' : 'development',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/assets/",
    filename: "bundle.js"
  }
};
