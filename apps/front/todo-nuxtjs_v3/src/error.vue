<script setup lang="ts">
import type { NuxtError } from 'nuxt/app';

const props = defineProps({
  error: Object as () => NuxtError,
});

const errorMessage = computed(() => {
  const stateCode = props.error?.statusCode;
  switch (stateCode) {
    case 400:
      return '不正な入力です。';
    case 404:
      return 'このページは存在しません。';
    default:
      return 'ただいま混み合っています。時間を空けて再度読み込んでください。';
  }
});
</script>

<template>
  <HeaderCommonHeader />
  <div class="layout">
    <h2 class="title">{{ errorMessage }}</h2>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  margin: 0 auto;
  padding: 44px 15px;
  max-width: 512px;

  .title {
    display: flex;
    justify-content: center;
  }
}
</style>
