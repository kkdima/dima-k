const withCSS = require('@zeit/next-css');

module.exports = withCSS({
	webpack: function(config) {
		config.module.rules.push(
			{
				test: /\.(eot|woff|woff2|otf|ttf|svg|png|jpg|gif)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 100000,
						name: '[name].[ext]'
					}
				}
			},
			{
				test: /\.style.js$/,
				use: [
					'style-loader',
					{ loader: 'css-loader', options: { importLoaders: 1 } },
					{ loader: 'postcss-loader', options: { parser: 'sugarss', exec: true } }
				]
			},
		);
		return config;
	}
});
