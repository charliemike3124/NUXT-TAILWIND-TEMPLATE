export default defineEventHandler(async (event) => {
    await useStorage().setItem("storage", "");
    return "Saved.";
});
