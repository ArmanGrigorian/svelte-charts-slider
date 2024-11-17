import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'black-light': '#1E1E1E',
				'gray-title': '#949494',
				'gray-lines': '#E3E3E3',
				'gray-metric': '#1818196B',
				'gray-background': '#EDEDED',
				'red-border': '#E30613'
			},
			fontSize: {
				title: '32px'
			},
			lineHeight: {
				title: '37px'
			},
			fontFamily: {
				arimo: ['Arimo', 'sans-serif']
			}
		}
	},

	plugins: [typography, forms]
} satisfies Config;
