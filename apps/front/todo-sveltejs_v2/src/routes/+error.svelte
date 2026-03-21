<script lang="ts">
	import Icon from '$lib/components/common/Icon/index.svelte';
	import { cn } from '$lib/utils/cn/index.svelte';

	const message = 'このページは存在しません';
</script>

<div class={cn('mt-8 gap-8', 'flex flex-col items-center')}>
	<Icon type="info" size={48} />
	<p class={cn('text-xl font-bold')}>{message}</p>
</div>
