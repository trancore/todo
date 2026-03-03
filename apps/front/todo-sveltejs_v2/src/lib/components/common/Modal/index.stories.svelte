<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Modal from './index.svelte';

	const { Story } = defineMeta({
		component: Modal,
		title: 'common/Modal',
		parameters: {
			layout: 'fullscreen'
		}
	});
</script>

{#snippet contentSnippet()}
	<p>Modal Content</p>
{/snippet}

<Story name="common" args={{ content: contentSnippet }} />
