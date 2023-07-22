import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  emitTokensOnly: true,
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx,vue}"],

  // Files to exclude
  exclude: [],

  // The output directory for your css system
  outdir: "styled-system",

  // custom
  theme: {
    tokens: {
      colors: {
        color1: { value: "#EBEBEB" },
        color2: { value: "#2F201A" },
        color3: { value: "#525252" },
        color4: { value: "#E9D415" },
        color5: { value: "#000000" },
        color6: { value: "#FFFFFF" },
      },
    },
  },
});
