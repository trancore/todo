<script lang="ts">
	import { cn } from '$lib/utils/cn/index.svelte';

	interface Props {
		text: string;
		color?: {
			bgcolor?: string;
			textcolor?: string;
		};
		onclick: () => void;
	}

	let {
		text,
		color = { bgcolor: 'bg-gray-500', textcolor: 'text-white' },
		onclick
	}: Props = $props();
</script>

<button
	class={cn('px-3 py-2', 'cursor-pointer rounded-full', color.bgcolor, color.textcolor)}
	{onclick}
>
	{text}
</button>
