<script lang="ts">
	import Icon from '$lib/components/common/Icon/index.svelte';
	import { cn } from '$lib/utils/cn/index.svelte';

	let isSignin = $state(true);
	let isPC = $state(false);

	const iconSize = isPC ? 64 : 48;
	const iconList = ['hamburger', 'user', 'add'] as const;
</script>

<header class={cn('py-5', 'bg-gray-500 text-white')}>
	<div
		class={cn(
			'mx-auto max-w-180',
			'flex',
			'text-3xl',
			isSignin ? 'justify-around' : 'justify-center'
		)}
	>
		{#if isSignin}
			{#each iconList as type, index (`${index}-${type}-icon`)}
				<Icon {type} size={iconSize} color="bg-white" />
			{/each}
		{:else}
			todo
		{/if}
	</div>
</header>
