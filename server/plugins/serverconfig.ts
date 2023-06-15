// Any code that needs to run before serving the App from the server goes here.

export default defineNitroPlugin((nitroApp) => {
    nitroApp.localFetch("/api/storage", {
        method: "Post",
    });
});
