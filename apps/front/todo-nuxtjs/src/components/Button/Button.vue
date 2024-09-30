<script setup lang="ts">
type Props = {
  text: string;
  width?: number;
  disabled?: boolean;
  onClick: () => void;
};

const { text, width, disabled, onClick } = defineProps<Props>();
</script>

<template>
  <button class="button" :onclick="onClick">
    {{ text }}
  </button>
</template>

<style lang="scss" scoped>
.button {
  border: none;
  border-radius: 9em;
  padding: 16px 12px;
  width: v-bind(width) px;
  color: #fff;

  // TODO: storeでテーマ管理したい
  background-color: v-bind('disabled ? "#8f8f8f99": "#8f8f8f"');
}
</style>
