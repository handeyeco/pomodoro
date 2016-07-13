module.exports = {
  entry: "./src/scripts/index.jsx",
  output: {
    path: (__dirname + "/dist/scripts"),
    filename: "bundle.js",
    publicPath: "/scripts/"
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: "babel",
      include: (__dirname + "/src"),
      query: {
        presets: [ 'es2015', 'react', 'react-hmre' ]
      }
    }]
  }
};
