<script setup lang="ts">
import Button from "~/components/Button/Button.vue";
</script>

<template>
  <div>
    <Button
      :text="'test'"
      :width="500"
      :onClick="
        () => {
          console.log('Click!!!');
        }
      "
    />
  </div>
</template>
