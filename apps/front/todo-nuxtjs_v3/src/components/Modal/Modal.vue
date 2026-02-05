<script setup lang="ts">
type Props = {
  onClickClose: () => void;
};

defineProps<Props>();
</script>

<template>
  <div class="back-float">
    <div id="modal" class="modal-box">
      <div class="modal-content">
        <Icon
          name="Close"
          class="icon"
          color="#000000"
          :size="32"
          :click-icon="onClickClose"
        />
        <div class="modal-content">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.back-float {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(0 0 0 / 50%);

  > .modal-box {
    width: 85%;
    height: 85%;
    background-color: white;

    > .modal-content {
      height: 100%;
      overflow-y: scroll;
      scroll-snap-type: y mandatory;
      overscroll-behavior-y: contain;

      > .icon {
        float: right;
        top: 8px;
        position: sticky;
        margin: 8px 8px 0 0;
      }

      > .modal-content {
        padding: 40px 24px;
      }
    }
  }
}
</style>
