<script setup lang="ts">
type Props = {
  userName: string;
  signOut: () => void;
};

defineProps<Props>();

const menuStore = useMenuStore();
</script>

<template>
  <div class="back-float">
    <div id="menu" class="menu">
      <div class="menu-title-box">
        <h1 id="user-name">{{ userName }}</h1>
      </div>
      <div class="menu-content-box">
        <div class="menu-content-list">
          <NuxtLink href="/completed" @click="menuStore.toggle">
            <h3>完了済TODO</h3>
          </NuxtLink>
        </div>
      </div>
      <div class="wrap-icon">
        <Icon
          name="PersonOff"
          :size="64"
          color="#FFFFFF"
          :click-icon="signOut"
        />
      </div>
    </div>
    <div id="outer-menu" class="outer-menu" @click="menuStore.toggle"></div>
  </div>
</template>

<style lang="scss" scoped>
@import url('~/assets/css/animation.scss');

.back-float {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  background-color: rgb(0 0 0 / 50%);

  > .menu {
    width: 300px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #4d4d4d;
    color: #fff;
    animation: slidein 0.3s ease-in;

    > .menu-title-box {
      width: 100%;
      height: 150px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 5px solid #fff;
    }

    > .menu-content-box {
      padding-top: 64px;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      align-self: center;
      gap: 24px;

      > .menu-content-list {
        list-style: none;
      }
    }

    > .wrap-icon {
      margin: 0 24px 24px 0;
      display: flex;
      flex-direction: row-reverse;
    }
  }

  > .outer-menu {
    flex-grow: 1;
  }
}
</style>
