/* eslint-disable @typescript-eslint/naming-convention */
import { componentMenu } from './src/utils/config-helpers';
import starlight from '@astrojs/starlight';
import svelte from '@astrojs/svelte';
import compress from '@playform/compress';
import { defineConfig } from 'astro/config';
process.env.BROWSER = 'chromium';

// https://astro.build/config
export default defineConfig({
	base: '/svelte-tweakpane-ui/',
	compressHTML: false, // Handled via astro-compress
	// messes up pagefind index if we want to strip the .html
	// build: {
	// 	format: 'file'
	// },

	integrations: [
		// https://starlight.astro.build/reference/configuration/
		starlight({
			components: {
				EditLink: './src/components/overrides/EditLink.astro',
				Head: './src/components/overrides/Head.astro',
				MarkdownContent: './src/components/overrides/MarkdownContent.astro',
				PageTitle: './src/components/overrides/PageTitle.astro',
				TableOfContents: './src/components/overrides/TableOfContents.astro',
				ThemeSelect: './src/components/overrides/ThemeSelect.astro'
			},
			customCss: ['./src/style.css'],
			description: 'A Svelte Tweakpane UI component library.',
			editLink: {
				baseUrl: 'https://github.com/kitschpatrol/svelte-tweakpane-ui/edit/main/docs/'
			},
			expressiveCode: {
				styleOverrides: {
					codeLineHeight: '1.65',
					frames: {
						tooltipSuccessBackground: 'var(--sl-color-gray-3)'
					}
				}
				// Themes: ['github-dark', 'github-light']
			},
			lastUpdated: true,
			// Logo: {
			// 	dark: './src/assets/svelte-tweakpane-ui-logo-dark.svg',
			// 	light: './src/assets/svelte-tweakpane-ui-logo-light.svg'
			// },
			sidebar: [
				{
					label: 'Overview',
					link: '/docs'
				},
				{
					label: 'Getting Started',
					link: '/docs/getting-started'
				},
				{
					label: 'Features',
					link: '/docs/features'
				},
				{
					label: 'Plugins',
					link: '/docs/plugins'
				},
				{
					label: 'Themes',
					link: '/docs/themes'
				},
				{
					label: 'Utilities',
					link: '/docs/utilities'
				},
				...componentMenu(),
				{
					label: 'Acknowledgments',
					link: '/docs/acknowledgments'
				}
			],
			social: {
				github: 'https://github.com/kitschpatrol/svelte-tweakpane-ui',
				// Maybe later
				// mastodon: 'https://mastodon.social/@kitschpatrol',
				twitter: 'https://twitter.com/kitschpatrol'
			},
			title: 'Svelte Tweakpane UI'
		}),
		svelte({}),
		compress({
			// Breaks layout in build as of version 0.0.12
			CSS: false,
			HTML: true,
			Image: false,
			JavaScript: true,
			// Logger: false,
			SVG: true
		})
	],
	server: {
		open: true
	},
	site: 'https://kitschpatrol.com/',
	trailingSlash: 'never',
	vite: {
		ssr: {
			// https://github.com/withastro/astro/issues/8660
			noExternal: ['nanoid']
		}
	}
});
