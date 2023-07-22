<script lang="ts" setup>
import Button from "./Button.vue";
import { MagnifyingGlassIcon } from "@heroicons/vue/24/solid";
import { css } from "../../styled-system/css";
import { hstack } from "../../styled-system/patterns";

const menuItems = ["Home", "Page", "Services", "Blog"];
const listItemStyle = css({ color: "color3" });
</script>

<template>
  <header
    :class="
      css({
        mx: 'auto',
        maxWidth: 1720,
        height: 41,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      })
    "
  >
    <div>
      <h1 :class="css({ color: 'color2', fontSize: 36 })">Clary</h1>
    </div>

    <ul :class="hstack({ maxW: 415 })">
      <li v-for="item in menuItems" :key="item" :class="listItemStyle">
        {{ item }}
      </li>
    </ul>
    <div :class="hstack({ columnGap: '27px' })">
      <Button visual="outline">MAKE APPOINTMENT</Button>
      <MagnifyingGlassIcon
        :class="css({ w: '16px', h: '16px', color: 'color3', fill: 'color3' })"
      />
    </div>
  </header>
</template>
