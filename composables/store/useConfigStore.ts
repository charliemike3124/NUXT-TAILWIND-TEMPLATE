import { defineStore } from "pinia";

export const useConfigStore = defineStore("config", () => {
    const msg = ref({});
    const lang = ref("en");

    return {
        msg,
        lang,
    };
});
