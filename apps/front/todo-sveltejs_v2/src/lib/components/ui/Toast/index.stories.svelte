<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Toast from './index.svelte';

	const { Story } = defineMeta({
		component: Toast,
		title: 'ui/Toast',
		parameters: {
			layout: 'centered'
		}
	});
</script>

<Story name="add" args={{ message: 'TODOを登録しました' }} />
<Story name="completed" args={{ message: 'TODOを完了しました' }} />
