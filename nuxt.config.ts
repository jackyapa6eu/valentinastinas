// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "@nuxt/bridge";

export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    // prerender index route by default
    "/": { prerender: true },
  },
});
