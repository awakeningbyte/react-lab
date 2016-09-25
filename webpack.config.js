var  path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: "./src/app.js",
	output: {
		path:	"./dist",
		filename: "bundle.js",
		publicPath: "/dist"
			
	},
	devServer: {
		inline: true,
		hot: true,
		port: 8080
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: "babel",
				include: __dirname,
				exclude: /node_modules/,
				query: {
					presets: ["es2015", "react", "react-hmre"]
				}
		
			},
			{
				test: /\.css/,
				loader: "style-loader!css-loader"
			},
			{ 
				test: /\.scss$/,
				loader: 'style!css!sass?outputStyle=compressed'
			}

		]
	},
	sassLoader: {
		includePaths: ["./node_modules", "./node_modules/grommet/node_modules"]
	}

}
