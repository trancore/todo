<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Layout from './index.svelte';

	const { Story } = defineMeta({
		component: Layout,
		title: 'common/Layout',
		parameters: {
			layout: 'fullscreen'
		}
	});
</script>

{#snippet contentSnippet()}
	<div class="bg-gray-300">Layout Content</div>
{/snippet}

<Story
	name="common"
	args={{
		content: contentSnippet
	}}
/>
