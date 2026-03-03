<script lang="ts">
	import { cn } from '$lib/utils/cn/index.svelte';

	interface Props {
		label: string;
		errorMessage?: string;
		isRounded?: boolean;
		placeholder?: string;
	}

	let { label, isRounded = false, errorMessage, placeholder = '' }: Props = $props();
</script>

<div class={cn('gap-2', 'flex flex-col')}>
	<label for={label}>{label}</label>
	<textarea
		id={label}
		class={cn('w-full px-3 py-1', 'border', isRounded && 'rounded-full')}
		name={label}
		{placeholder}
		rows="6"
	></textarea>
	<p class={cn('ml-3.5', 'text-sm text-red-400')}>{errorMessage}</p>
</div>
