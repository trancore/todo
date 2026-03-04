<script lang="ts">
	import Icon from '$lib/components/common/Icon/index.svelte';
	import { cn } from '$lib/utils/cn/index.svelte';
</script>

<div class={cn('float-bg', 'h-dvh w-dvw', 'z-999')}>
	<menu class={cn('h-full max-w-50', 'flex flex-col', 'bg-gray-500 text-white')}>
		<div class={cn('p-8', 'flex items-center justify-center', 'border-b-2')}>
			<p class={cn('text-xl')}>NAME</p>
		</div>
		<div class={cn('flex flex-col items-center', 'p-8')}>
			<ul class="flex flex-col gap-4">
				<li>完了済TODO</li>
			</ul>
		</div>
		<div class={cn('pr-3 pb-3', 'flex grow flex-col-reverse items-end')}>
			<Icon type="user-cross" color="" size={48} />
		</div>
	</menu>
</div>
