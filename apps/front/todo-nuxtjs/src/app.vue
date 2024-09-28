<script setup lang="ts">
import config from '../formkit.config.mjs';
</script>

<template>
  <FormKitProvider :config="config">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </FormKitProvider>
</template>
