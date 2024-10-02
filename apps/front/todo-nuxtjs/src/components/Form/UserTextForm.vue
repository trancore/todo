<script setup lang="ts">
type InputType = 'text' | 'email' | 'password';
type Props = {
  type: InputType;
  labelName: string;
  errorMessage: string | undefined;
  placeholder?: string;
};

defineProps<Props>();
</script>

<template>
  <div class="user-text">
    <label htmlFor="user-text-form">{{ labelName }}</label>
    <input id="user-text-form" :type="type" :placeholder="placeholder" />
    <p id="user-text-form-error-message">{{ errorMessage }}</p>
  </div>
</template>

<style lang="scss" scoped>
.user-text {
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
