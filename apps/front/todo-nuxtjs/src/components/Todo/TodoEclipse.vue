<script setup lang="ts">
type Props = {
  title: string;
  description: string | undefined;
  click: () => void;
};

const { title, description, click } = defineProps<Props>();
</script>

<template>
  <div class="todo-eclipse" :onClick="click">
    <h3 id="todo-title" class="todo-title">{{ title }}</h3>
    <p id="todo-description" class="todo-description">{{ description }}</p>
  </div>
</template>

<style lang="scss" scoped>
.todo-eclipse {
  padding: 24px 46px;
  border: 4px solid #8f8f8f;
  border-radius: 90px;
  cursor: pointer;

  .todo-title {
    margin: 0 0 6px;
    display: -webkit-box;
    overflow: hidden;
    line-clamp: 1;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .todo-description {
    margin: 0;
    display: -webkit-box;
    overflow: hidden;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
}
</style>
