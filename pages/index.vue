<template>
  <div class="cards-container">
<!--    <UserCard v-for="guest in $store.state.guests" :guest="guest.attributes" :guestId="guest.id" :key="guest.id" />-->
  </div>
</template>

<script>


// import axios from "@/plugins/axios/index";

const mixin = {
  created() {
    console.log('I am coming from mixin');
  },
  data() {
    return {
      test: 'Test data from mixin',
      test2: 42
    }
  }
}

export default {
  mixins: [mixin],
  data() {
    return {
      test: 'Goodbye world'
    }
  },
  created () {
    console.log('I am from component');
  },
  // asyncData() {
  //   // серверный запрос
  //   // return axios.get('/guests').then((res) => {
  //   //   const guests = res.data.data;
  //   //   return { guests }
  //   //   }).catch((e) => console.log(e))
  // },
  mounted () {
    // this.$store.dispatch('getGuests'); // вызов action


    // return axios.get('/guests').then((res) => {
    //   const guests = res.data.data;
    //   this.$store.commit('SET_GUESTS', guests)
    //
    // }).catch((e) => console.log(e))
  }
};
</script>

<style scoped>
.cards-container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

</style>
