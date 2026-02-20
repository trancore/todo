<script lang="ts">
	import { cn } from '$lib/utils/cn/index.svelte';

	const ICON_TYPES = {
		ADD: 'add',
		CHECK: 'check',
		HAMBURGER: 'hamburger',
		INFO: 'info',
		PEN: 'pen',
		TRASH: 'trash',
		USER: 'user',
		'USER-CROSS': 'user-cross'
	} as const;
	// 定数から型を生成したいため、eslintのルールを無効化
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const ICON_SYZE = {
		16: 16,
		24: 24,
		32: 32,
		48: 48,
		64: 64
	} as const;

	interface Props {
		type: (typeof ICON_TYPES)[keyof typeof ICON_TYPES];
		size: (typeof ICON_SYZE)[keyof typeof ICON_SYZE];
	}

	let { type, size }: Props = $props();

	const getIconType = () => {
		switch (type) {
			case ICON_TYPES.ADD:
				return 'icon-[solar--add-circle-bold-duotone]';
			case ICON_TYPES.CHECK:
				return 'icon-[solar--check-circle-bold-duotone]';
			case ICON_TYPES.HAMBURGER:
				return 'icon-[solar--hamburger-menu-linear]';
			case ICON_TYPES.INFO:
				return 'icon-[solar--info-circle-linear]';
			case ICON_TYPES.PEN:
				return 'icon-[solar--pen-new-square-linear]';
			case ICON_TYPES.TRASH:
				return 'icon-[solar--trash-bin-trash-linear]';
			case ICON_TYPES.USER:
				return 'icon-[solar--user-circle-bold]';
			case ICON_TYPES['USER-CROSS']:
				return 'icon-[solar--user-cross-rounded-bold]';
		}
	};
</script>

<span
	class={cn(
		'',
		getIconType(),
		`size-${size / 4}`,
		type === ICON_TYPES.ADD || type === ICON_TYPES.CHECK ? 'opacity-0' : ''
	)}
></span>
