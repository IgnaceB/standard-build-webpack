

const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
  main: path.resolve(__dirname, './src/app.js'),
},
output: {
  filename: '[name].bundle.js',
  path: path.resolve(__dirname, 'deploy'),
},
devServer: {
  static:{
    directory:path.join(__dirname,'deploy')
  },
  open: true
},
module: {
  rules: [
     {
        test: /\.html$/,
        loader: 'html-loader'
      },
        { 
      test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
      type: 'asset/resource',
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    },
      { 
      test: /\.s[ac]ss$/i,
      use: ["style-loader", "css-loader","sass-loader"], 
    },
  ]
},
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Output",
      template:"./src/index.html"
    }),
  new CleanWebpackPlugin()
  ],
};
