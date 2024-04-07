<template>
  <div>
    <h1>ValentinastinASS</h1>
<!--    <a-button type="primary">Primary Button</a-button>-->

  </div>
</template>


<script>
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, onValue, update } from 'firebase/database';
// import { Button } from 'ant-design-vue';

// (function () {
//   const firebaseConfig = {
//     apiKey: "AIzaSyBoDpmLvl8k2YYJ3kV10oN4ncCYhxM4slQ",
//     authDomain: "valentinastinas.firebaseapp.com",
//     projectId: "valentinastinas",
//     messagingSenderId: "878844074948",
//     databaseURL: "https://valentinastinas-default-rtdb.europe-west1.firebasedatabase.app",
//     appId: "1:878844074948:web:37bab6df4b72a98309e291"
//   };
//   const app = initializeApp(firebaseConfig);
// })();

export default {
  components: {
    // 'a-button': Button,
  },
  mounted () {
    // const db = getDatabase();
    // const dataRef = ref(db, `test`);
    //
    // return onValue(dataRef, (snapshot) => {
    //   if (snapshot.exists()) {
    //     const data = snapshot.val();
    //     console.log('data', data);
    //   }
    // });
  }
}

</script>