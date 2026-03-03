<script lang="ts">
	import { cn } from '$lib/utils/cn/index.svelte';

	interface Props {
		label: string;
		type: 'email' | 'text' | 'password';
		errorMessage?: string;
		isRounded?: boolean;
		placeholder?: string;
	}

	let { label, type, isRounded = false, errorMessage, placeholder = '' }: Props = $props();
</script>

<div class={cn('gap-2', 'flex flex-col')}>
	<label for={label}>{label}</label>
	<input
		id={label}
		class={cn('px-3 py-1', 'border', isRounded && 'rounded-full')}
		name={label}
		{placeholder}
		{type}
	/>
	<p class={cn('ml-3.5', 'text-sm text-red-400')}>{errorMessage}</p>
</div>
