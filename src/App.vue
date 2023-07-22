<script setup lang="ts">
import { css } from "../styled-system/css";
</script>

<template>
  <div>
    <h1
      :class="
        css({ fontSize: 12, textDecoration: 'underline', color: 'tomato' })
      "
    >
      Hello
    </h1>
  </div>
</template>

<style scoped></style>
