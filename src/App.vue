<script setup lang="ts">
import { css } from "../styled-system/css";
import Header from "./components/Header.vue";
Header;
</script>

<template>
  <div :class="css({ minHeight: '100vh', bgColor: 'color1', pt: '21px' })">
    <Header />
  </div>
</template>

<style scoped></style>
