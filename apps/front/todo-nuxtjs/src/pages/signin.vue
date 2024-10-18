<script setup lang="ts"></script>

<template>
  <div class="signin">
    <Icon name="UserCircle" :size="128" />
    <div class="wrap-button">
      <Button text="サインイン" :width="128" :on-click="() => {}" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.signin {
  display: flex;
  flex-direction: column;
  align-items: center;

  > .wrap-button {
    margin-top: 32px;
  }
}
</style>
