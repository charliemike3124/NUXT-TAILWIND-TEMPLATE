export default defineEventHandler(async (event) => {
    const storage = useStorage();
    await storage.setItem(process.env.LOBO_STORAGE_KEY, null);

    return "Memory: \n Config Erased.";
});
