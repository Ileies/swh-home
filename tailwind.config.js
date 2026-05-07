import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	plugins: [daisyui],
	daisyui: {
		themes: ['winter', 'dark'],
		darkTheme: 'winter',
		//darkTheme: "dark",
		base: true, // applies background color and foreground color for root element by default
		styled: true, // include daisyUI colors and design decisions for all components
		utils: true // adds responsive and modifier utility classes
	}
};

export default config;
