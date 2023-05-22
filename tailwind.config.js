import { screens as _screens } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			140: '140px',
			180: '180px',
			200: '200px',
			220: '220px',
			240: '240px',
			260: '260px',
			280: '280px',
			300: '300px',
			320: '320px',
			375: '375px',
			425: '425px',
			480: '480px',
			512: '512px',
			580: '580px',
			620: '620px',
			768: '768px',
			1024: '1024px',
			1200: '1200px',
			1400: '1400px',
			1440: '1440px',
			1600: '1600px',
			1920: '1920px',
			2048: '2048px',
			..._screens
		},
		extend: {
			translate: {
				nav: '-100%'
			}
		}
	},
	plugins: []
};
