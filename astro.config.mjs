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
						{ label: 'Introduction', link: '/progression/introduction/' },
						{ label: 'Les 4 Stratégies', link: '/progression/4-strategies/' },
						{ label: 'Les 3 Cerveaux', link: '/progression/3-cerveaux/' },
						{ label: 'Les 4 Aspects', link: '/progression/4-aspects/' },
						{ label: 'Types de Joueurs', link: '/progression/types-joueurs/' },
						{ label: 'Contraintes', link: '/progression/contraintes/' },
						{ label: '5 Pourquoi', link: '/progression/5-pourquoi/' },
						{ label: 'Principe DNA', link: '/progression/principe-dna/' },
						{ label: 'Témoignages', link: '/progression/temoignages/' },
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
						{ label: 'Routine entre points', link: '/mental/routine-points/' },
						{ label: 'État d\'esprit', link: '/mental/etat-esprit/' },
						{ label: 'Forteresse', link: '/mental/forteresse/' },
						{ label: 'Relaxation', link: '/mental/relaxation/' },
					],
				},
				{
					label: '4. Le Physique',
					items: [
						{ label: 'Respiration', link: '/physique/respiration/' },
						{ label: 'Sommeil', link: '/physique/sommeil/' },
						{ label: 'Conscience', link: '/physique/conscience/' },
					],
				},
				{
					label: '5. Progression Continue',
					items: [
						{ label: 'Les 5 Erreurs', link: '/progression-continue/erreurs/' },
						{ label: '5 Hacks', link: '/progression-continue/hacks/' },
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
