<script lang="ts">
	import { cn } from '$lib/utils/cn/index.svelte';

	interface Props {
		message: string;
	}

	let { message }: Props = $props();
</script>

<div class={cn('px-6 py-3', 'flex items-center justify-center', 'border-2 border-red-400')}>
	<p class={cn('font-bold')}>{message}</p>
</div>
