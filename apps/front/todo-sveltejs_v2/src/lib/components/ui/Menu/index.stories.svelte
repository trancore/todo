<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Menu from './index.svelte';

	const { Story } = defineMeta({
		component: Menu,
		title: 'ui/Menu',
		parameters: {
			layout: 'fullscreen'
		}
	});
</script>

<Story name="common" args={{}} />
