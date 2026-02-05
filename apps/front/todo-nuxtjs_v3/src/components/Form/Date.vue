<script setup lang="ts">
type Props = {
  labelName: string;
  errorMessage: string | undefined;
};

defineProps<Props>();
</script>

<template>
  <div class="date">
    <label htmlFor="date">{{ labelName }}</label>
    <input id="date" type="date" />
    <p id="date-error-message">{{ errorMessage }}</p>
  </div>
</template>

<style lang="scss" scoped>
.date {
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
