import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
				'text-primary': 'rgb(var(--color-text-primary) / <alpha-value>)',
				'text-secondary': 'rgb(var(--color-text-secondary) / <alpha-value>)',
				'accent': 'rgb(var(--color-accent) / <alpha-value>)',
				'primary': 'rgb(var(--color-primary) / <alpha-value>)',
				'secondary': 'rgb(var(--color-secondary) / <alpha-value>)',
				'danger': 'rgb(var(--color-danger) / <alpha-value>)',
				'warning': 'rgb(var(--color-warning) / <alpha-value>)',
				'success': 'rgb(var(--color-success) / <alpha-value>)',
				'info': 'rgb(var(--color-info) / <alpha-value>)',
				'link': 'rgb(var(--color-link) / <alpha-value>)',
				'background': 'rgb(var(--color-background) / <alpha-value>)',
				'foreground': 'rgb(var(--color-foreground) / <alpha-value>)',
				'input': 'rgb(var(--color-input) / <alpha-value>)',
				'separator': 'rgb(var(--color-separator) / <alpha-value>)',
				'hint': 'rgb(var(--color-hint) / <alpha-value>)',
				'focus': 'rgb(var(--color-focus) / <alpha-value>)',
				'text-primary-dark': 'rgb(var(--color-text-primary-dark) / <alpha-value>)',
				'text-secondary-dark': 'rgb(var(--color-text-secondary-dark) / <alpha-value>)',
				'accent-dark': 'rgb(var(--color-accent-dark) / <alpha-value>)',
				'primary-dark': 'rgb(var(--color-primary-dark) / <alpha-value>)',
				'secondary-dark': 'rgb(var(--color-secondary-dark) / <alpha-value>)',
				'danger-dark': 'rgb(var(--color-danger-dark) / <alpha-value>)',
				'warning-dark': 'rgb(var(--color-warning-dark) / <alpha-value>)',
				'success-dark': 'rgb(var(--color-success-dark) / <alpha-value>)',
				'info-dark': 'rgb(var(--color-info-dark) / <alpha-value>)',
				'link-dark': 'rgb(var(--color-link-dark) / <alpha-value>)',
				'background-dark': 'rgb(var(--color-background-dark) / <alpha-value>)',
				'foreground-dark': 'rgb(var(--color-foreground-dark) / <alpha-value>)',
				'input-dark': 'rgb(var(--color-input-dark) / <alpha-value>)',
				'separator-dark': 'rgb(var(--color-separator-dark) / <alpha-value>)',
				'hint-dark': 'rgb(var(--color-hint-dark) / <alpha-value>)',
				'focus-dark': 'rgb(var(--color-focus) / <alpha-value>)',
			},
    },
  },
  plugins: [],
};
export default config;
