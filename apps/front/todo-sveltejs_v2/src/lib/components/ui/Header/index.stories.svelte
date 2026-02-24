<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Header from './index.svelte';

	const { Story } = defineMeta({
		component: Header,
		title: 'ui/Header',
		parameters: {
			layout: 'fullscreen'
		}
	});
</script>

<Story name="signin" />

<Story name="signout" />
