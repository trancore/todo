﻿<script setup lang="ts">
import { PAGE_PATH } from '~/constants/page';

const isSignin = ref(true);
const hasPlusIcon = ref(true);

function onClickMenuIcon() {}
function onClickPlusIcon() {}
</script>

<template>
  <header class="header">
    <template v-if="isSignin">
      <Icon
        name="Menu"
        color="#000000"
        :size="64"
        :click-icon="onClickMenuIcon"
      />
      <NuxtLink :to="PAGE_PATH.TOP">
        <Icon name="UserCircle" color="#000000" :size="64" />
      </NuxtLink>
      <Icon
        v-if="hasPlusIcon"
        name="Plus"
        color="#000000"
        :size="64"
        :click-icon="onClickPlusIcon"
      />
    </template>
    <h1 v-else class="title">todo</h1>
  </header>
</template>

<style lang="scss" scoped>
.header {
  padding: 18px 21px;
  background-color: #8f8f8f;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  margin: auto;
}
</style>
