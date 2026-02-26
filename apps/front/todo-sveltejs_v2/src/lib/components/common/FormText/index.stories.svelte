<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import FormText from './index.svelte';

	const { Story } = defineMeta({
		component: FormText,
		title: 'common/FormText',
		parameters: {
			layout: 'centered'
		}
	});
</script>

<Story
	name="user_name"
	args={{
		type: 'text',
		label: '名前',
		placeholder: '山田 太郎',
		isRounded: true,
		errorMessage: 'その名前は存在しません'
	}}
/>
<Story
	name="user_email"
	args={{
		type: 'email',
		label: 'メールアドレス',
		placeholder: 'sample@example.com',
		isRounded: true,
		errorMessage: 'そのメールアドレスは存在しません'
	}}
/>
<Story
	name="user_password"
	args={{
		type: 'password',
		label: 'パスワード',
		placeholder: '1234567890',
		isRounded: true,
		errorMessage: 'パスワードが違います'
	}}
/>
