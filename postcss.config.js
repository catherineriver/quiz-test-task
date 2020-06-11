module.exports = {
	plugins: {
		autoprefixer: {
			cascade: false
		},
		// stylefmt: {},
		cssnano: {
			convertValues: { length: false }
		},
		'postcss-reporter': {}
	}
};
