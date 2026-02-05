<script setup lang="ts">
type Props = {
  text: string;
  displayed: boolean;
};

const { text, displayed } = defineProps<Props>();
</script>

<template>
  <div v-if="displayed" id="toast" class="toast">
    <p>{{ text }}</p>
  </div>
</template>

<style lang="scss" scoped>
@import url('~/assets/css/animation.scss');

.toast {
  position: fixed;
  margin: 0 auto;
  left: 0;
  right: 0;
  bottom: 24px;
  width: fit-content;
  padding: 0 32px;
  border: 2px solid red;
  background-color: white;
  font-weight: bold;
  animation: popup 2s cubic-bezier(0.33, 1, 0.68, 1) forwards;
}
</style>
