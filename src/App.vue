<template>
  <div id="app" class="center">
    <the-header v-if="isAuthorized"/>
    <div v-else/>
    <router-view v-if="isLoaded"/>
    <the-footer v-if="isAuthorized"/>
    <div v-else/>
  </div>
</template>
<script>
import TheFooter from './components/TheFooter.vue';
import TheHeader from './components/TheHeader.vue';

export default {
  components: { TheHeader, TheFooter },
  computed: {
    isLoaded() {
      return this.$store.state.isLoaded;
    },
    isAuthorized() {
      return this.$store.getters.isAuthorized;
    },
  },
  mounted() {
    if (sessionStorage.getItem('posts') !== null
      && sessionStorage.getItem('users') !== null) {
      const posts = JSON.parse(sessionStorage.getItem('posts'));
      const users = JSON.parse(sessionStorage.getItem('users'));
      this.$store.commit('setPosts', posts);
      this.$store.commit('setUsers', users);
      this.$store.commit('hasLoaded');
    } else {
      this.$store.dispatch('fetchData');
    }
    if (sessionStorage.getItem('user') !== null) {
      const user = JSON.parse(sessionStorage.getItem('user'));
      this.$store.commit('authorize', user);
    }
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/reset.scss';

html, body {
  height: 100%;
}
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: grid;
  grid-template-rows: auto 1fr;
  min-height: calc(100% + 1px);
}
.center {
  padding: 0 calc(50% - 480px);
}
.hidden {
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
}
</style>
