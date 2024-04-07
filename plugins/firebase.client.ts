import { defineNuxtPlugin } from "nuxt/app";
import { initializeApp } from "firebase/app";

export default defineNuxtPlugin((nuxtApp) => {
  const firebaseConfig = {
    apiKey: "AIzaSyBoDpmLvl8k2YYJ3kV10oN4ncCYhxM4slQ",
    authDomain: "valentinastinas.firebaseapp.com",
    projectId: "valentinastinas",
    messagingSenderId: "878844074948",
    databaseURL:
      "https://valentinastinas-default-rtdb.europe-west1.firebasedatabase.app",
    appId: "1:878844074948:web:37bab6df4b72a98309e291",
  };
  const app = initializeApp(firebaseConfig);
});