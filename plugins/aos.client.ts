import AOS from "aos";
import "aos/dist/aos.css";

export default defineNuxtPlugin((nuxtApp) => {
    const AOS_CONFIG = AOS.init({
        duration: 800,
        once: true,
    });
    nuxtApp.vueApp.use(AOS_CONFIG);
});
