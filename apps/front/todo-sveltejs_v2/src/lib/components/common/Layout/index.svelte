<script lang="ts">
	import Header from '$lib/components/ui/Header/index.svelte';
	import { cn } from '$lib/utils/cn/index.svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		content: Snippet;
	}

	let { content }: Props = $props();
</script>

<div class={cn('min-h-screen', 'flex flex-col')}>
	<Header />
	<div class={cn('flex-1')}>
		<main class={cn('mx-auto max-w-180')}>
			{@render content()}
		</main>
	</div>
</div>
