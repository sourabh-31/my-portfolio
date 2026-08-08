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
      name: "Archivo",
      cssVariable: "--font-archivo",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/archivo-400.woff2"],
            weight: 400,
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/archivo-800.woff2"],
            weight: 800,
            style: "normal",
          },
        ],
      },
    },

    {
      provider: fontProviders.local(),
      name: "Space Grotesk",
      cssVariable: "--font-space-grotesk",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/space-grotesk-400.woff2"],
            weight: 400,
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/space-grotesk-500.woff2"],
            weight: 500,
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/space-grotesk-700.woff2"],
            weight: 700,
            style: "normal",
          },
        ],
      },
    },

    {
      provider: fontProviders.local(),
      name: "Geist Mono",
      cssVariable: "--font-geist-mono",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/geist-mono-400.woff2"],
            weight: 400,
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/geist-mono-700.woff2"],
            weight: 700,
            style: "normal",
          },
        ],
      },
    },
  ],
});
