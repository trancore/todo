<script setup lang="ts">
type Props = {
  labelName: string;
  errorMessage: string | undefined;
  placeholder?: string;
};

defineProps<Props>();
</script>

<template>
  <div class="text">
    <label htmlFor="text">{{ labelName }}</label>
    <input id="textform" :placeholder="placeholder" />
    <p id="textform-error-message">{{ errorMessage }}</p>
  </div>
</template>

<style lang="scss" scoped>
.text {
  width: 100%;
  display: flex;
  flex-direction: column;

  label {
    display: block;
    margin-bottom: 6px;
  }

  input {
    width: 100%;
    box-sizing: border-box;
    border: 2px solid #000;
    padding: 8px 10px;
  }

  p {
    margin-left: 10px;
    color: #f00;
  }
}
</style>
