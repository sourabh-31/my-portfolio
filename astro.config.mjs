// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import cloudflare from "@astrojs/cloudflare";

import mdx from "@astrojs/mdx";

import expressiveCode from "astro-expressive-code";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    expressiveCode({
      themes: ["slack-dark"],
    }),
    mdx(),
  ],

  adapter: cloudflare({
    imageService: "compile",
  }),

  fonts: [
    {
      provider: fontProviders.local(),
      name: "DM Sans",
      cssVariable: "--font-dm-sans",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/dm-sans-400.woff2"],
            weight: 400,
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/dm-sans-700.woff2"],
            weight: 700,
            style: "normal",
          },
        ],
      },
    },

    {
      provider: fontProviders.local(),
      name: "Satoshi",
      cssVariable: "--font-satoshi",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/satoshi-400.woff2"],
            weight: 400,
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/satoshi-500.woff2"],
            weight: 500,
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/satoshi-700.woff2"],
            weight: 700,
            style: "normal",
          },
        ],
      },
    },

    {
      provider: fontProviders.local(),
      name: "IBM Plex Mono",
      cssVariable: "--font-ibm-plex-mono",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/ibm-plex-mono-400.woff2"],
            weight: 400,
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/ibm-plex-mono-700.woff2"],
            weight: 700,
            style: "normal",
          },
        ],
      },
    },
  ],
});
