const primaryLanguage = "en";

export default defineNuxtRouteMiddleware(async (to, from) => {
    const configStore = useConfigStore();
    const response = await useFetch("/api/loboconfig", {
        method: "GET",
    });

    configStore.msg = response.data.value?.msg[primaryLanguage] ?? {};
    configStore.lang = to.query.lang ?? primaryLanguage;

    // -- Create Conditionals for each additional language -- //
    // if (configStore.lang === "es" && response.data.value?.es) {
    //     configStore.msg = response.data.value.es;
    // }
});
