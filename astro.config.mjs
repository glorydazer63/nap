// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
<<<<<<< HEAD
  site: 'https://glorydazer63.github.io/nap',
base: '/nap',
=======
  site: 'https://glorydazer63.github.io',
  base: '/nap',
>>>>>>> 901250effd478ffcf8da56dd2208803dd0c7e573
  output: 'static',
  integrations: [
	  starlight({
			title: 'Notes and Pages',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'General',
					items: [{ autogenerate: { directory: 'general' } }],
				},
				{
					label: 'Docs',
					items: [{ autogenerate: { directory: 'docs' } }],
				},
				{
					label: 'Workflow',
					items: [{ autogenerate: { directory: 'workflows' } }],
				},
				{
					label: 'Local Environment',
					items: [{ autogenerate: { directory: 'local-env' } }],
				},
				{
					label: 'Glossary',
					items: [{ autogenerate: { directory: 'glossary' } }],
				},
			],
		}),
	],
});
