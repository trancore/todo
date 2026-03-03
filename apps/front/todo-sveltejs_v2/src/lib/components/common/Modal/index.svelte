<script lang="ts">
	import Icon from '$lib/components/common/Icon/index.svelte';
	import { cn } from '$lib/utils/cn/index.svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		content: Snippet;
	}

	let { content }: Props = $props();
</script>

<dialog open class={cn('float-bg', 'h-full w-full', 'flex flex-col items-center justify-center')}>
	<div class={cn('min-h-120 min-w-74', 'bg-white')}>
		<div class={cn('mt-1 mr-1', 'flex flex-row-reverse', 'cursor-pointer')}>
			<Icon type="close" size={48} />
		</div>
		<div class={cn('p-4')}>
			{@render content()}
		</div>
	</div>
</dialog>
