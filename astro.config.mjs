// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { starlightTagsPlugin } from 'starlight-tags';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://example.com', // Mandatory for sitemap generation
  integrations: 



export default defineConfig({
 site: 'https://glorydazer63.github.io/nap',
base: '/nap',
output: 'static',
  integrations: [sitemap()],
                });   
                [starlight({
		  components: {
			Footer: './src/components/CustomFooter.astro',
			},
			title: 'Notes and Pages',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'General',
					items: [{ autogenerate: { directory: 'general' } }],
				},
				{
					label: 'Docs',
					items: [{ autogenerate: { directory: 'maindocs' } }],
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
