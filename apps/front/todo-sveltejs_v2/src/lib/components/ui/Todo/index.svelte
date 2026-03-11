<script lang="ts">
	import { cn } from '$lib/utils/cn/index.svelte';
	import { formatYYYYMMHH } from '$lib/utils/format/index.svelte';

	interface Props {
		title: string;
		description: string | undefined;
		expired: Date;
	}

	let { title, description, expired }: Props = $props();
</script>

<div class={cn('w-full', 'flex flex-col')}>
	<div
		class={cn(
			'gap-2 px-12 py-8',
			'flex flex-col',
			'break-all',
			'overflow-hidden rounded-full border-3 border-gray-400'
		)}
	>
		<p class={cn('line-clamp-1 text-2xl font-bold')}>
			{title}
		</p>
		{#if description !== undefined}
			<p class={cn('line-clamp-2')}>
				{description}
			</p>
		{/if}
	</div>
	<div>
		<p>{formatYYYYMMHH(expired)}</p>
		<div>
			<div>Icon</div>
			<div>Icon</div>
			<div>Icon</div>
		</div>
	</div>
</div>
