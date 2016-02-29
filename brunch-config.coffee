module.exports = config:
	modules: wrapper: false
	minify: yes
	plugins: 
		babel: pattern: /\.(es6|jsx)$/
		uglify: ignored: /angular-correlator-js.js/
	paths: 
		public: 'dist'
		watched: [ 
			'src' 
		]
	files:
		javascripts: 
			joinTo: 
				'angular-correlator-js.js': /src/
				'angular-correlator-js.min.js': /src/
