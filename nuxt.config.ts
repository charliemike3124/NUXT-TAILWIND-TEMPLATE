import tailwindConfig from "./tailwind.config";

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      // @ts-ignore
      style: [{ children: tailwindConfig.cssRootVars, type: "text/css" }],
    },
  },

  runtimeConfig: {
    // The private keys which are only available within server-side
    secret: "XXX",
    // Keys within public, will be also exposed to the client-side
    public: {
      apiBase: "/api",
    },
  },
});
