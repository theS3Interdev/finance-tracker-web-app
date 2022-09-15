/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		fontFamily: {
			ubuntu: 'Ubuntu, sans-serif',
		},
		extend: {
			colors: {
				darkCharcoal: '#333333',
				lightCharcoal: '#777777',
				darkGreen: '#1F9751',
				lightGreen: '#EFFAF0',
			},
		},
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/typography'),
	],
};
