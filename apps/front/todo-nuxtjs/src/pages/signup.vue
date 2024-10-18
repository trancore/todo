<script setup lang="ts">
// TODO サインアップ画面は、eメールとパスワードによる認証認可が実装されていないため
// TODO 一旦放置
</script>

<template>
  <div class="signup">
    <Icon name="UserCircle" :size="128" />
    <Form :submit="() => {}">
      <div class="input-form">
        <FormUserTextForm
          type="text"
          label-name="名前"
          error-message="エラーメッセージが表示されます"
        />
        <FormUserTextForm
          type="email"
          label-name="メールアドレス"
          error-message="エラーメッセージが表示されます"
        />
        <FormUserTextForm
          type="password"
          label-name="パスワード"
          error-message="エラーメッセージが表示されます"
        />
      </div>
      <div class="wrapped-button">
        <Button text="サインアップ" :width="128" :on-click="() => {}" />
      </div>
    </Form>
  </div>
</template>

<style lang="scss" scoped>
.signup {
  display: flex;
  flex-direction: column;
  align-items: center;

  > .input-form {
    margin-bottom: 46px;
    display: flex;
    flex-direction: column;
  }

  > form > .wrapped-button {
    display: flex;
    justify-content: center;
  }
}
</style>
