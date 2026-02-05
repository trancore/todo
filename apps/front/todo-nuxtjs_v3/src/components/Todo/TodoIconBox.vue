<script setup lang="ts">
type Props = {
  todoId: number;
  uncheck?: {
    has: boolean;
    click: () => void;
  };
  check?: {
    has: boolean;
  };
  squareEdit?: {
    has: boolean;
  };
  trashCan?: {
    has: boolean;
  };
  refresh: (opts?: { dedupe?: 'cancel' | 'defer' }) => Promise<void>;
};

const { todoId, uncheck, check, squareEdit, trashCan, refresh } =
  defineProps<Props>();

const [
  { execute: putTodosTodoidStatus },
  { execute: deleteTodosTodoid, error: errorDeleteTodosTodoid },
] = await Promise.all([
  useApiClient('/todos/{todo_id}/status', {
    method: 'put',
    params: {
      todo_id: String(todoId),
    },
    body: {
      status: 'DONE',
    },
    server: false,
    immediate: false,
  }),
  useApiClient('/todos/{todo_id}', {
    method: 'delete',
    params: {
      todo_id: String(todoId),
    },
    server: false,
    immediate: false,
  }),
]);
const clickCheck = async () => {
  await putTodosTodoidStatus();
  setTimeout(() => refresh(), 100);
};
const clickTrashCan = async () => {
  await deleteTodosTodoid();
  if (errorDeleteTodosTodoid.value) {
  }
  setTimeout(() => refresh(), 100);
};

const { toggleEdit } = useModalStore();
const clickEdit = async () => {
  toggleEdit();
};
</script>

<template>
  <div class="todo-icon-box">
    <Icon
      v-if="uncheck?.has"
      name="Uncheck"
      :size="48"
      :click-icon="uncheck.click"
    />
    <Icon v-if="check?.has" name="Check" :size="48" :click-icon="clickCheck" />
    <Icon
      v-if="squareEdit?.has"
      name="SquareEdit"
      :size="48"
      :click-icon="clickEdit"
    />
    <Icon
      v-if="trashCan?.has"
      name="TrashCan"
      :size="48"
      :click-icon="clickTrashCan"
    />
  </div>
</template>

<style lang="scss" scoped>
.todo-icon-box {
  display: flex;
  gap: 24px;
}
</style>
