<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Button from './index.svelte';

	const { Story } = defineMeta({
		component: Button,
		title: 'common/Button',
		parameters: {
			layout: 'centered'
		}
	});
</script>

<Story name="add" args={{ text: '登録', onclick: () => {} }} />
<Story name="update" args={{ text: '編集', onclick: () => {} }} />
<Story name="delete" args={{ text: '削除', onclick: () => {} }} />
<Story name="complete" args={{ text: '完了', onclick: () => {} }} />
<Story name="signup" args={{ text: 'サインアップ', onclick: () => {} }} />
<Story name="signin" args={{ text: 'サインイン', onclick: () => {} }} />
