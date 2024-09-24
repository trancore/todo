<script setup lang="ts">
type Props = {
  displayed: boolean;
  text?: string;
};

const { displayed, text } = defineProps<Props>();
</script>

<template>
  <p v-if="displayed" class="error-text">{{ text }}</p>
</template>

<style lang="scss" scoped>
.error-text {
  margin: 0;
  padding: 24px;
  background-color: pink;
  color: red;
}
</style>
