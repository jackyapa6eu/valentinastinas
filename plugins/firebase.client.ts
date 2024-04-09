import { defineNuxtPlugin } from "nuxt/app";
import { initializeApp } from "firebase/app";

export default defineNuxtPlugin((nuxtApp) => {
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: "valentinastinas",
    messagingSenderId: "878844074948",
    databaseURL:
      "https://valentinastinas-default-rtdb.europe-west1.firebasedatabase.app",
    appId: "1:878844074948:web:37bab6df4b72a98309e291",
  };
  const app = initializeApp(firebaseConfig);
});
