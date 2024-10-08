<script setup lang="ts">
type Props = {
  todo: {
    title: string;
    description: string | undefined;
  };
  event: {
    onClickEdit: () => void;
  };
};

const { todo, event } = defineProps<Props>();
const { title, description } = todo;
const { onClickEdit } = event;
</script>

<template>
  <Modal>
    <h1>編集</h1>
    <Form :submit="() => {}">
      <TextForm
        class="content"
        label-name="タイトル"
        :placeholder="title"
        error-message="error"
      />
      <TextArea
        class="content"
        label-name="説明"
        :placeholder="description"
        error-message="error"
      />
      <Date class="content" label-name="期限" error-message="error" />
      <div class="button-box">
        <Button text="編集" :disabled="false" :on-click="onClickEdit" />
      </div>
    </Form>
  </Modal>
</template>

<style lang="scss" scoped>
.content {
  width: 100%;
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
}
</style>
