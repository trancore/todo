<script lang="ts">
	import '$lib/assets/css/tailwind.css';

	import Header from '$lib/components/ui/Header/index.svelte';
	import { cn } from '$lib/utils/cn/index.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" /></svelte:head>

<Header />
<main class={cn('mx-auto my-12 max-w-180', 'flex justify-center')}>
	{@render children()}
</main>
