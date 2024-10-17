<script setup lang="ts"></script>

<template>
  <div>
    <h1>登録</h1>
    <Form>
      <div class="input-form">
        <FormTextForm
          label-name="タイトル"
          error-message="エラー"
          :register="() => {}"
        />
        <FormTextArea
          label-name="説明"
          error-message="エラー"
          :register="() => {}"
        />
        <FormDate
          label-name="締切日"
          error-message="エラー"
          :register="() => {}"
        />
      </div>
      <div class="button-wrap">
        <Button text="登録" :width="128" :on-click="() => {}" />
      </div>
    </Form>
  </div>
</template>

<style lang="scss" scoped>
.input-form {
  margin-bottom: 36px;
  display: flex;
  flex-direction: column;
}

.button-wrap {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
