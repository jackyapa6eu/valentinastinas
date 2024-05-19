import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyBoDpmLvl8k2YYJ3kV10oN4ncCYhxM4slQ",
	authDomain: "valentinastinas.firebaseapp.com",
	databaseURL: "https://valentinastinas-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "valentinastinas",
	storageBucket: "valentinastinas.appspot.com",
	messagingSenderId: "878844074948",
	appId: "1:878844074948:web:37bab6df4b72a98309e291"
};

export const app = initializeApp(firebaseConfig);