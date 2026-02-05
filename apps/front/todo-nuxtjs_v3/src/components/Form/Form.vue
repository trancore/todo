<script setup lang="ts">
type Props = {
  submit?: () => undefined;
};

const { submit } = defineProps<Props>();
</script>

<template>
  <form type="form" class="form" @submit="submit">
    <slot />
  </form>
</template>
