// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Tennis Tactique',
			description: 'La bible de la progression continue au tennis',
			logo: {
				src: './src/assets/tennis.svg',
			},
			social: {
				github: 'https://github.com/alexfassina/tennis-tactique',
			},
			sidebar: [
				{
					label: 'Introduction',
					items: [
						{ label: 'Bienvenue', slug: 'intro' },
					],
				},
				{
					label: '1. Progression Rapide',
					autogenerate: { directory: 'progression' },
				},
				{
					label: '2. La Tactique',
					autogenerate: { directory: 'tactique' },
				},
				{
					label: '3. Le Mental',
					autogenerate: { directory: 'mental' },
				},
				{
					label: '4. Le Physique',
					autogenerate: { directory: 'physique' },
				},
				{
					label: 'Lexique',
					autogenerate: { directory: 'lexique' },
				},
			],
			customCss: ['./src/styles/custom.css'],
		}),
	],
});
