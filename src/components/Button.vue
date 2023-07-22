<script lang="ts" setup>
import { cva } from "../../styled-system/css";

type TButtonProps = {
  visual?: "outline";
};

defineProps<TButtonProps>();

const buttonStyle = cva({
  base: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    outline: "none",
  },
  variants: {
    visual: {
      outline: {
        borderWidth: "2px",
        borderColor: "color4",
        bgColor: "transparent",
        color: "color2",
        px: "24px",
        py: "9px",
      },
    },
  },
});
</script>

<template>
  <button :class="buttonStyle({ visual })">
    <slot />
  </button>
</template>
