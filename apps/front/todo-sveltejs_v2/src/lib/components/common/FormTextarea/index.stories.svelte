<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import FormTextarea from './index.svelte';

	const { Story } = defineMeta({
		component: FormTextarea,
		title: 'common/FormTextarea',
		parameters: {
			layout: 'centered'
		}
	});
</script>

<Story
	name="todo_description"
	args={{
		label: '説明',
		placeholder: 'やることやることやることやることやることやることやることやることやること',
		errorMessage: '説明を入力してください'
	}}
/>
