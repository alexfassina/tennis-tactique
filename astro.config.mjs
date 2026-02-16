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
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/alexfassina/tennis-tactique' },
			],
			sidebar: [
				{
					label: 'Accueil',
					link: '/intro',
				},
				{
					label: '1. Progression Rapide',
					items: [
						{ label: 'Les 4 Stratégies', link: '/progression/4-strategies/' },
						{ label: 'Types de Joueurs', link: '/progression/types-joueurs/' },
						{ label: 'Principe DNA', link: '/progression/principe-dna/' },
						{ label: 'ICP', link: '/progression/icp/' },
					],
				},
				{
					label: '2. La Tactique',
					items: [
						{ label: 'Cartographie 3D', link: '/tactique/cartographie-3d/' },
						{ label: 'Stratégies', link: '/tactique/strategies/' },
						{ label: 'Profils', link: '/tactique/profils/' },
					],
				},
				{
					label: '3. Le Mental',
					items: [
						{ label: '9 Principes', link: '/mental/9-principes/' },
						{ label: 'Entre les points', link: '/mental/entre-points/' },
						{ label: 'État d\'esprit', link: '/mental/etat-esprit/' },
					],
				},
				{
					label: '4. Le Physique',
					items: [
						{ label: 'Respiration', link: '/physique/respiration/' },
						{ label: 'Sommeil', link: '/physique/sommeil/' },
					],
				},
				{
					label: 'Lexique',
					items: [
						{ label: 'Stratégie', link: '/lexique/strategie/' },
						{ label: 'Mental', link: '/lexique/mental/' },
					],
				},
			],
			hero: {
				title: 'Tennis Tactique',
				tagline: 'La bible de la progression continue au tennis',
				image: {
					html: '<div style="font-size: 4rem;">🎾</div>',
				},
			},
			customCss: ['./src/styles/custom.css'],
		}),
	],
});
