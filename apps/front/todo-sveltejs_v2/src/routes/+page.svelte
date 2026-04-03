<script lang="ts">
	import Todo from '$lib/components/ui/Todo/index.svelte';
	import { cn } from '$lib/utils/cn/index.svelte';

	const now = Date.now();
	const days = (n: number) => n * 24 * 60 * 60 * 1000;
	const dummy = [
		{
			title: '買い物リストを作る',
			description: '牛乳 / 卵 / パン / コーヒー豆',
			expired: new Date(now + days(10)),
			isCompleted: false
		},
		{
			title: 'SvelteKit のルーティングを確認',
			description: 'load 関数と +page/+layout の役割整理',
			expired: new Date(now + days(5)),
			isCompleted: false
		},
		{
			title: '請求書を提出',
			description: undefined,
			expired: new Date(now + days(2)),
			isCompleted: false
		},
		{
			title: '定期メンテの実施',
			description: 'バックアップ確認と依存更新の計画',
			expired: new Date(now),
			isCompleted: false
		},
		{
			title: '読書（積読消化）',
			description: '1章だけでも進める',
			expired: new Date(now - days(1)),
			isCompleted: true
		}
	];
</script>

<div>
	<div class={cn('gap-10', 'flex flex-col justify-center')}>
		{#each dummy as todo (todo.title)}
			<Todo {...todo} />
		{/each}
	</div>
</div>
