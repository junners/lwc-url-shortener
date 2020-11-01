// Find the full example of all available configuration options at
// https://github.com/muenzpraeger/create-lwc-app/blob/main/packages/lwc-services/example/lwc-services.config.js
// devServer: {
//     proxy: { '/': 'http://localhost:3001' }
// }
module.exports = {
	resources: [
		{ from: 'src/client/resources/', to: 'dist/resources/' },

		{ from: 'src/client/index.html', to: 'dist/index.html' },

		{ from: 'src/client/manifest.json', to: 'dist/manifest.json' }
	],

	sourceDir: './src/client',

	devServer: {
		port: 3001,
		host: 'localhost',
		open: false,
		stats: 'errors-only',
		noInfo: true,
		contentBase: './src/client'
	}
};
