<script setup lang="ts">
import { formatToYyyyMMDd } from '~/utils/dete';

type Props = {
  todo: {
    title: string;
    description: string | undefined;
    deadlineAt: string | undefined;
  };
  locateCompleted: boolean;
  disabled: {
    completedButtonDisabled: boolean;
    deletedButtonDisabled: boolean;
  };
  event: {
    clickCompletedButton: () => void;
    clickEditButton: () => void;
    clickDeleteButton: () => void;
  };
};

const { todo, locateCompleted, disabled, event } = defineProps<Props>();
const { title, description, deadlineAt } = todo;
const formattedDeadline = deadlineAt
  ? formatToYyyyMMDd(new Date(deadlineAt))
  : '';
</script>

<template>
  <Modal>
    <h1>詳細</h1>
    <div class="content">
      <h3>タイトル</h3>
      <p id="todo-title">{{ title }}</p>
    </div>
    <div class="content">
      <h3>説明</h3>
      <p id="todo-description">{{ description }}</p>
    </div>
    <div class="content">
      <h3>期限</h3>
      <p id="todo-deadline">{{ formattedDeadline }}</p>
    </div>
    <div v-if="locateCompleted" class="button-box">
      <Button
        text="完了"
        :disabled="locateCompleted"
        :on-click="event.clickCompletedButton"
      />
      <div class="second-button-box">
        <Button text="編集" :width="10000" :on-click="event.clickEditButton" />
        <Button
          text="削除"
          :width="10000"
          :disabled="disabled.deletedButtonDisabled"
          :on-click="event.clickDeleteButton"
        />
      </div>
    </div>
  </Modal>
</template>

<style lang="scss" scoped>
.content {
  margin-bottom: 24px;

  > p {
    padding-left: 8px;
  }
}

.button-box {
  width: 70%;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 24px;

  > .second-button-box {
    display: flex;
    justify-content: space-between;
  }
}
</style>
