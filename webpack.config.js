const path = require("path");
const CopyWebPackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",

  // Enable sourcemaps for debugging webpack's output.
  devtool: "inline-source-map",

  module: {
    rules: [
      {
        // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },

  resolve: {
    extensions: [ ".tsx", ".ts", ".js", ".json" ]
  },

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },

  plugins: [
    new CopyWebPackPlugin([
        { from: './statics' }
    ])
  ]
};
