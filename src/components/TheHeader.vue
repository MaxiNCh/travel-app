<template lang>
  <header class="header">
    <div class="header__left">
    <router-link class="header__profile" to="/profile">
      <img class="header__img" :src="user.image" alt="avatar">
      <h1 class="header__name" href="">{{this.user.name}}</h1>
    </router-link>
    </div>
    <header-search/>
    <router-link class="header__link" to="/">
      <base-logo/>
    </router-link>
  </header>
</template>
<script>
import BaseLogo from './BaseLogo.vue';
import HeaderSearch from './HeaderSearch.vue';

export default {
  name: 'TheHeader',
  components: { HeaderSearch, BaseLogo },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style lang="scss">

.header {
  display: grid;
  grid-template-columns: 25rem auto fit-content(10rem);
  column-gap: 2rem;
  border-bottom: 5px solid $main-color;
  padding: 1rem 2rem;
  background: $bg-color;
  align-items: center;
  &__left {
    display: flex;
    align-items: center;
  }
  &__profile {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
  &__img {
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
  }
  &__name {
    display: inline-block;
    margin-left: 1rem;
    width: fit-content;
    font-size: 1.2rem;
    color: $main-color;
  }
  &__link:focus {
    outline: none;
  }
}
</style>
