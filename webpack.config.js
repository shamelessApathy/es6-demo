const webpack = require('webpack');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const WebpackNotifierPlugin = require('webpack-notifier');

let configs = [];

let jsConfig = {
	entry: ['babel-polyfill', './assets/js/app.js'],
	output: { filename: 'public/js/app.js'},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use : {
					loader: 'babel-loader',
					options: {
						presets: ['babel-preset-env']
					}
				}
			}
		]
	},
	plugins: [
		new UglifyJsPlugin(),
		new WebpackNotifierPlugin({ title: "ES6", alwaysNotify: true}),
	]
};

let sassConfig = {};

configs.push(jsConfig);
//configs.push(sassConfig);



module.exports = configs;