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
  <button
    class="button"
    :style="{
      backgroundColor: disabled ? '#8f8f8f99' : '#8f8f8f',
      width: width + `px`,
    }"
    :onclick="onClick"
  >
    {{ text }}
  </button>
</template>

<style lang="scss" scoped>
.button {
  border: none;
  border-radius: 9em;
  padding: 16px 12px;
  color: #fff;
}
</style>
