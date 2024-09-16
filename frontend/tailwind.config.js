/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				// Add custom breakpoints or adjust existing ones
				'sm': '640px',  // Small screens and up
				'md': '768px',  // Medium screens and up
				'lg': '1024px', // Large screens and up
				'xl': '1280px', // Extra large screens and up
			},
		},
	},
	// eslint-disable-next-line no-undef
	plugins: [require("daisyui")],
};

