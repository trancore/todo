<script setup lang="ts">
type Props = {
  openedMenu: boolean;
  openedTodoDetailModal: boolean;
  openedTodoEditModal: boolean;
};

const { openedMenu, openedTodoDetailModal, openedTodoEditModal } =
  defineProps<Props>();
</script>

<template>
  <div>
    <Menu v-if="openedMenu" />
    <TodoDetail v-if="openedTodoDetailModal" />
    <TodoEdit v-if="openedTodoEditModal" />
    <HeaderCommonHeader />
    <Error :displayed="true" text="error" />
    <div class="layout">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  margin: 0 auto;
  padding: 44px 15px;
  max-width: 512px;
}
</style>
