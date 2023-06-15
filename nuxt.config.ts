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

    buildDir: "dist",

    runtimeConfig: {
        BASE_URL: "",
        FIREBASE_API_KEY: "",
        FIREBASE_AUTH_DOMAIN: "",
        FIREBASE_PROJECT_ID: "",
        FIREBASE_STORAGE_BUCKET: "",
        FIREBASE_MESSAGING_SENDER_ID: "",
        FIREBASE_APP_ID: "",
        FIREBASE_COLLECTION_NAME: "",
        public: {},
    },

    image: {
        dir: "public",
        provider: "netlify",
    },
});
