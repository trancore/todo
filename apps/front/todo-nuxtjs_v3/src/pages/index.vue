<script setup lang="ts">
const {
  data: todoList,
  error,
  refresh: refreshTodoList,
} = await useApiClient('/todos', {
  method: 'get',
  query: {
    status: 'WIP,TODO',
  },
});

const { toggleDetail } = useModalStore();

if (error.value !== null) {
  createErrorPage(error.value);
}

const uncheck = {
  has: true,
  click: () => {},
};
const check = {
  has: true,
};
const squareEdit = {
  has: true,
};
const trashCan = {
  has: true,
};
</script>

<template>
  <div v-if="todoList" class="todo-list">
    <div
      v-for="todo in todoList"
      :id="String(todo.id)"
      :key="todo.id"
      class="todo"
    >
      <TodoEclipse
        :title="todo.title"
        :description="todo.description"
        :click="toggleDetail"
      />
      <div class="todo-under">
        <div
          v-if="todo.deadlineAt"
          :id="`todo-deadline-${todo.id}`"
          class="todo-deadline-at"
          :style="{ color: colorizeDate(new Date(todo.deadlineAt)) }"
        >
          {{ formatToYyyyMMDd(new Date(todo.deadlineAt)) }}
        </div>
        <p v-else>" "</p>
        <TodoIconBox
          :todo-id="todo.id"
          :uncheck="uncheck"
          :check="check"
          :square-edit="squareEdit"
          :trash-can="trashCan"
          :refresh="refreshTodoList"
        />
      </div>
    </div>
  </div>
  <div v-else class="no-have">
    <Icon name="Check" :size="64" />
    <h2>なし</h2>
  </div>
</template>

<style lang="scss" scoped>
.todo-list {
  display: flex;
  flex-direction: column;
  gap: 48px;

  > .todo {
    display: flex;
    flex-direction: column;

    > .todo-under {
      margin-top: 8px;
      padding: 0 12px;
      display: flex;
      justify-content: space-between;

      > .todo-deadline-at {
        font-weight: bold;
      }
    }
  }
}

.no-have {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
