const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point of your application
  output: {
    filename: 'bundle.js', // Output bundle file name
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  module: {
    rules: [
      // Add rules for processing different file types (e.g., JavaScript, CSS, etc.)
      {
        test: /\.js$/, // Apply this rule to .js files
        exclude: /node_modules/, // Don't apply this rule to files in node_modules
        use: {
          loader: 'babel-loader', // Use babel-loader for .js files
          options: {
            presets: ['@babel/preset-env'], // Use @babel/preset-env for compiling JavaScript
          },
        },
      },
    ],
  },
};
