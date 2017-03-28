var webpack = require('webpack');
var path = require('path');

var config = {
	entry:  './index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ['babel-loader'],
				exclude: /node_modules/,
				include: __dirname
			}
		]
	},
	plugins : [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': '"production"'
		})
	]
};

module.exports = config;