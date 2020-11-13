const path = require('path')

module.exports = {
	mode: 'development',
	entry: {
		main: './src/app.js',
	},
	output: {
		fileName: '[name].js',
		path: path.resolve('./dist'),
	},
}
