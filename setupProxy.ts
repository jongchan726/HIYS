const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
	app.use(
		createProxyMiddleware('/api', {
			target: 'https://5807-211-206-46-150.jp.ngrok.io',
			changeOrigin: true,
		})
	);
};