<script setup lang="ts">
import Check from '~/assets/icons/check.svg';
import Close from '~/assets/icons/close.svg';
import Error from '~/assets/icons/error.svg';
import Menu from '~/assets/icons/menu.svg';
import None from '~/assets/icons/none.svg';
import PersonOff from '~/assets/icons/person-off.svg';
import Plus from '~/assets/icons/plus.svg';
import SquareEdit from '~/assets/icons/square-edit.svg';
import TrashCan from '~/assets/icons/trash-can.svg';
import Uncheck from '~/assets/icons/uncheck.svg';
import UserCircle from '~/assets/icons/user-circle.svg';

const ICONS = {
  Check,
  Close,
  Error,
  Menu,
  None,
  PersonOff,
  Plus,
  SquareEdit,
  TrashCan,
  Uncheck,
  UserCircle,
};

type IconName = keyof typeof ICONS;
type Size = 16 | 24 | 32 | 48 | 64 | 128;
type Props = {
  name: IconName;
  size: Size;
  color?: string;
  clickIcon?: () => void;
};

const { name, clickIcon } = defineProps<Props>();

const Icon = ICONS[name];
const hasClickIcon = !!clickIcon;
</script>

<template>
  <Icon
    ref="icon"
    class="icon"
    :alt="name"
    :height="size"
    :width="size"
    :fill="color"
    :stroke="color"
    @click="clickIcon"
  />
</template>

<style lang="scss" scoped>
.icon {
  cursor: v-bind('hasClickIcon ? "pointer" : ""');
}
</style>
