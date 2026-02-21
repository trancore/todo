<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Icon from './index.svelte';

	const { Story } = defineMeta({
		component: Icon,
		title: 'common/Icon',
		parameters: {
			layout: 'centered'
		}
	});
</script>

<Story name="ADD_48" args={{ type: 'add', size: 48 }} />
