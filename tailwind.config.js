// tailwind.config.js
module.exports = {
	theme: {
		screens: {
			zr: '0',
			sm: '425px',
			fl: '550px',
			md: '768px',
			ad: '932px',
			lg: '1024px',
			xl: '1280px'
		},
		maxWidth: {
			'1/4': '25%',
			'1/2': '50%',
			'3/4': '75%'
		},
		backgroundColor: theme => ({
			...theme('colors'),
			primary: '#3490dc',
			secondary: '#ffed4a',
			danger: '#e3342f',
			appleGrey: '#f3f3f3'
		})
	},
	variants: {},
	plugins: []
};
