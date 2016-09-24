var  path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: "./app.js",
	output: {
		path:	"./dist",
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: "babel-loader",
				include: __dirname,
				exclude: /node_modules/
			}
		]

	}

}
