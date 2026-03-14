<script lang="ts">
	import Icon from '$lib/components/common/Icon/index.svelte';
	import { cn } from '$lib/utils/cn/index.svelte';
	import { formatYYYYMMHH } from '$lib/utils/format/index.svelte';

	interface Props {
		title: string;
		description: string | undefined;
		expired: Date;
	}

	let { title, description, expired }: Props = $props();

	/**
	 * 現在日時から期限までの日数を変換する関数
	 * @param expired 期限日時
	 */
	function getExpiredCategory(expired: Date) {
		const now = new Date();
		const diff = expired.getTime() - now.getTime();
		const diffInDays = Math.ceil(diff / (1000 * 60 * 60 * 24));

		if (diffInDays >= 7) {
			// 7日以上
			return 'seven_days_or_more';
		} else if (diffInDays >= 3 && diffInDays < 7) {
			// 3日以上7日未満
			return 'less_than_seven_days';
		} else if (diffInDays > 0 && diffInDays < 3) {
			// 1日以上3日未満
			return 'less_than_three_days';
		} else if (diffInDays === 0) {
			// 当日
			return 'on_the_day';
		} else {
			// 期限切れ
			return 'expired';
		}
	}
</script>

<div class={cn('w-full', 'flex flex-col')}>
	<div
		class={cn(
			'gap-2 px-12 py-8',
			'flex flex-col',
			'break-all',
			'overflow-hidden rounded-full border-3 border-gray-400'
		)}
	>
		<p class={cn('line-clamp-1 text-2xl font-bold')}>
			{title}
		</p>
		{#if description !== undefined}
			<p class={cn('line-clamp-2')}>
				{description}
			</p>
		{/if}
	</div>
	<div class={cn('mt-4 mr-4 ml-10 md:mx-12', 'flex items-center justify-between')}>
		<p
			class={cn(
				getExpiredCategory(expired) === 'seven_days_or_more' && 'text-black',
				getExpiredCategory(expired) === 'less_than_seven_days' && 'text-green-500',
				getExpiredCategory(expired) === 'less_than_three_days' && 'text-yellow-500',
				getExpiredCategory(expired) === 'on_the_day' && 'text-orange-500',
				getExpiredCategory(expired) === 'expired' && 'text-red-500'
			)}
		>
			{formatYYYYMMHH(expired)}
		</p>
		<div class={cn('gap-4', 'flex')}>
			<div class={cn('cursor-pointer')}>
				<Icon type="check" size={32} />
			</div>
			<div class={cn('cursor-pointer')}>
				<Icon type="pen" size={32} />
			</div>
			<div class={cn('cursor-pointer')}>
				<Icon type="trash" size={32} />
			</div>
		</div>
	</div>
</div>
