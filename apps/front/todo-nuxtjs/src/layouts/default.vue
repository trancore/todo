<script setup lang="ts">
const errorStore = useErrorStore();
const menuStore = useMenuStore();
const modalStore = useModalStore();

const todo1 = {
  title: 'test',
  description: 'testtesttest',
  deadlineAt: '2024-01-01',
};
const todo2 = {
  title: 'test',
  description: 'testtesttest',
};
</script>

<template>
  <div>
    <Menu v-if="menuStore.isOpen" user-name="username" :sign-out="() => {}" />
    <ModalTodoDetail
      v-if="modalStore.isOpenDetail"
      :todo="todo1"
      :locate-completed="true"
      :disabled="{
        completedButtonDisabled: false,
        deletedButtonDisabled: false,
      }"
      :event="{
        clickCompletedButton: () => {},
        clickEditButton: () => {},
        clickDeleteButton: () => {},
      }"
    />
    <ModalTodoEdit
      v-if="modalStore.isOpenEdit"
      :todo="todo2"
      :event="{
        onClickEdit: () => {},
      }"
    />
    <HeaderCommonHeader />
    <Error :displayed="errorStore.isOpen" text="error" />
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
