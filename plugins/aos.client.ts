import AOS from "aos";
import 'aos/dist/aos.css';

export default defineNuxtPlugin((nuxtApp) => {
  const AOS_CONFIG = AOS.init({
    duration: 1000,
  });
  nuxtApp.vueApp.use(AOS_CONFIG);
});