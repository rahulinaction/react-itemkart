module.exports = {
  entry: "./app.js",
  output: {
    path: __dirname,
    filename: "bundle.js",
    publicPath: "/static/"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        include: __dirname,
        query: {
          presets: [ 'es2015', 'react' ,'react-hmre']
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        loader: "style-loader!css-loader!less-loader",
        exclude: /node_modules/
      },
      { 
        test: /\.json$/, loader: 'json-loader' 
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        // include: [path.join(__dirname, 'www')],
        loader: 'file-loader',
        // exclude: /node_modules/
      }
    ]
  }
}
