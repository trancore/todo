<script lang="ts">
	import '$lib/assets/css/tailwind.css';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" /></svelte:head>

{@render children()}
