<script setup lang="ts">
type Props = {
  uncheck: {
    has: boolean;
    click: () => void;
  };
  check: {
    has: boolean;
    click: () => void;
  };
  squareEdit: {
    has: boolean;
    click: () => void;
  };
  trashCan: {
    has: boolean;
    click: () => void;
  };
};

const { uncheck, check, squareEdit, trashCan } = defineProps<Props>();
</script>

<template>
  <div class="todo-icon-box">
    <Icon
      v-if="uncheck.has"
      name="Uncheck"
      :size="48"
      :click-icon="uncheck.click"
    />
    <Icon v-if="check.has" name="Check" :size="48" :click-icon="check.click" />
    <Icon
      v-if="squareEdit.has"
      name="SquareEdit"
      :size="48"
      :click-icon="squareEdit.click"
    />
    <Icon
      v-if="trashCan.has"
      name="TrashCan"
      :size="48"
      :click-icon="trashCan.click"
    />
  </div>
</template>

<style lang="scss" scoped>
.todo-icon-box {
  display: flex;
  gap: 24px;
}
</style>
