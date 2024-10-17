<script setup lang="ts">
// TODO サインアップ画面は、eメールとパスワードによる認証認可が実装されていないため
// TODO 一旦放置
</script>

<template>
  <div class="signup">
    <Icon name="UserCircle" :size="128" />
    <Form :submit="() => {}">
      <div class="input-form">
        <UserTextForm
          type="text"
          label-name="名前"
          error-message="エラーメッセージが表示されます"
        />
        <UserTextForm
          type="email"
          label-name="メールアドレス"
          error-message="エラーメッセージが表示されます"
        />
        <UserTextForm
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

  > .wrapped-button {
    margin: 0 auto;
  }
}
</style>
