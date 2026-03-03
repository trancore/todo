<script lang="ts">
	import { cn } from '$lib/utils/cn/index.svelte';

	const ICON_TYPES = {
		ADD: 'add',
		CHECK: 'check',
		CLOSE: 'close',
		HAMBURGER: 'hamburger',
		INFO: 'info',
		PEN: 'pen',
		TRASH: 'trash',
		USER: 'user',
		'USER-CROSS': 'user-cross'
	} as const;
	const ICON_SYZE = {
		16: 16,
		24: 24,
		32: 32,
		48: 48,
		64: 64
	} as const;

	interface Props {
		type: (typeof ICON_TYPES)[keyof typeof ICON_TYPES];
		size?: (typeof ICON_SYZE)[keyof typeof ICON_SYZE];
		color?: string;
	}

	let { type, size = 24, color = 'bg-black' }: Props = $props();

	/**
	 * アイコンの種類に応じたクラス名を返す関数
	 * @returns {string} クラス名
	 */
	const getIconType = (): string => {
		switch (type) {
			case ICON_TYPES.ADD:
				return 'icon-[solar--add-circle-linear]';
			case ICON_TYPES.CHECK:
				return 'icon-[solar--check-circle-linear]';
			case ICON_TYPES.CLOSE:
				return 'icon-[solar--close-circle-linear]';
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
	/**
	 * アイコンのサイズに応じたクラス名を返す関数
	 * @returns {string} クラス名
	 */
	const getIconSize = () => {
		switch (size) {
			case ICON_SYZE[16]:
				return 'size-4';
			case ICON_SYZE[24]:
				return 'size-6';
			case ICON_SYZE[32]:
				return 'size-8';
			case ICON_SYZE[48]:
				return 'size-12';
			case ICON_SYZE[64]:
				return 'size-16';
		}
	};
</script>

<span class={cn(getIconType(), getIconSize(), color)}></span>
