<template>
  <nav class="navigation">
    <nuxt-link :to="'/'">
      <Logo :title="logoText"/>
    </nuxt-link>
<!--    <Modal v-if="showModal" @modalClose="toggleModal"/>-->
  </nav>
</template>

<script>
  import Logo from './navigation/Logo';
  // import Modal from './Modal';
  export default {
    components: {
      Logo, /* Modal */
    },
    data() {
      return {
        logoText: 'valentinastinas',
        links: [{to: '/', title: 'Main'}, {to: '/about', title: 'About page'}],
        showModal: true
      }
    },
    methods: {
      toggleModal(data) {
        if (data) console.log(data);

        this.showModal = !this.showModal;
      }
    }
  }
</script>

<style scoped>
.navigation {
  width: 100%;
  height: 80px;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255,255,255,0.2);
}

.button {
  width: 100px;
  padding: 10px 15px;
  background: white;
  color: black;
  border: 1px solid black;
  border-radius: 30px;
  cursor: pointer;
  transition: .3s;
}
.button:hover {
  background: black;
  color: white;
  transition: .3s;
}

.link {
  color: black;
}
</style>
