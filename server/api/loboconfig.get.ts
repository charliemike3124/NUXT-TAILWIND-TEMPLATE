import firestore from "../utils/firebase";
import { doc, getDoc } from "firebase/firestore";

export default defineEventHandler(async (event) => {
    const storage = useStorage();
    let loboconfig = await storage.getItem(process.env.LOBO_STORAGE_KEY);

    if (!loboconfig) {
        console.log("Firestore: \n\t Getting loboconfig.");
        const docRef = doc(firestore, "websites", process.env.LOBO_DOCUMENT_ID);
        const docSnap = await getDoc(docRef);
        loboconfig = docSnap.data();
        storage.setItem(process.env.LOBO_STORAGE_KEY, loboconfig);
    }

    return loboconfig;
});
