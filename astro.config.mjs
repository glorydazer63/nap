// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://glorydazer63.github.io/nap',
  base: '/nap',
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
