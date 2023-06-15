export default defineEventHandler(async (event) => {
    const storage = await useStorage().getItem("storage");
    return storage;
});
