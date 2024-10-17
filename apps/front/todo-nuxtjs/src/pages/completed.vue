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
</script>

<template>
  <div>
    <h1>完了済み</h1>
    <template v-if="todoList && todoList.length > 0">
      <div class="todo-list">
        <div v-for="todo in todoList" :key="todo.id" class="todo">
          <TodoEclipse
            :id="String(todo.id)"
            :title="todo.title"
            :description="todo.description"
            :click="() => {}"
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
            <p v-else></p>
            <TodoIconBox
              :id="todo.id"
              :check="{ has: true, click: () => {} }"
              :trash-can="{ has: true, click: () => {} }"
            />
          </div>
        </div>
      </div>
    </template>
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
</style>
