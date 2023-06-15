import tailwindConfig from "./tailwind.config";

export default defineNuxtConfig({
    modules: ["@nuxtjs/tailwindcss", "@nuxt/image-edge", "@pinia/nuxt"],

    app: {
        head: {
            script: [],
            style: [{ children: tailwindConfig.cssRootVars, type: "text/css" }],
        },
    },

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/global.scss" as *;',
                },
            },
        },
    },

    runtimeConfig: {
        public: {},
    },

    image: {
        dir: "public",
        provider: "netlify",
    },
});
