/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
			 "primary": "#0f0f0f",
			 "custom-yellow": "#ffdd00"
			},
		},
	},
	plugins: [],
}
