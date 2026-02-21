/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				orange: {
					600: '#f97316',
					700: '#ea580c',
				},
			},
		},
	},
	plugins: [],
};
