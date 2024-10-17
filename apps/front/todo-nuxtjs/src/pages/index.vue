<script setup lang="ts">
const todoList = [
  {
    id: 1,
    userId: 1,
    title: 'title',
    description: 'description',
    deadlineAt: '2024-10-11',
    status: 'TODO',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
  },
];

const uncheck = {
  has: true,
  click: () => {},
};
const check = {
  has: true,
  click: () => {},
};
const squareEdit = {
  has: true,
  click: () => {},
};
const trashCan = {
  has: true,
  click: () => {},
};
</script>

<template>
  <div v-if="todoList" class="todo-list">
    <div v-for="todo in todoList" id="todo" :key="todo.id" class="todo">
      <TodoEclipse
        :title="todo.title"
        :description="todo.description"
        :click="() => {}"
      />
      <div class="todo-under">
        <div
          v-if="todo.deadlineAt"
          id="todo-deadline"
          class="todo-deadline-at"
          :style="{ color: colorizeDate(new Date(todo.deadlineAt)) }"
        >
          {{ todo.deadlineAt }}
        </div>
        <p v-else>" "</p>
        <TodoIconBox
          :uncheck="uncheck"
          :check="check"
          :square-edit="squareEdit"
          :trash-can="trashCan"
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
