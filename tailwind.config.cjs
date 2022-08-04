/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    extend: {
			screens: {
				'mb': { 'max': '720px' }
			},
			backgroundImage: {
				grad: 'linear-gradient(90deg, white, transparent)',
				'grad-alt': 'linear-gradient(90deg, blue-800, transparent)'
			},
			animation: {
				spin: 'spinner 2s infinite cubic-bezier(0.7,0.7,0.7,0.7)'
			},
			keyframes: {
				spinner: {
					'0%': {transform: 'rotate(0deg)'},
					'25%': {transform: 'rotate(90deg)'},
					'50%': {transform: 'rotate(180deg)'},
					'75%': {transform: 'rotate(270deg)'},
					'100%': {transform: 'rotate(360deg)'}
				}
			}
		},
  },
  plugins: [],
}
