<script setup lang="ts">
type Props = {
  submit?: () => undefined;
};

const { submit } = defineProps<Props>();
</script>

<template>
  <form class="form" @submit="submit">
    <slot />
  </form>
</template>

<style lang="scss" scoped>
.form {
  width: 100%;
  display: flex;
  flex-direction: column;

  label {
    display: block;
    margin-bottom: 6px;
  }

  input {
    width: 100%;
    box-sizing: content-box;
    border: 2px solid #000;
    padding: 8px 10px;
  }

  textarea {
    width: 100%;
    box-sizing: content-box;
    border: 2px solid #000;
    padding: 8px 10px;
  }

  p {
    margin-left: 10px;
    color: #f00;
  }
}
</style>
