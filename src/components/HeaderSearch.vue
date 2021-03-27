<template >
  <div>
    <form class="header__form" action="">
      <label for="search">
        <input id="search" class="header__input" type="text">
        <span class="material-icons header__search">
          search
        </span>
      </label>
    </form>
  </div>
</template>
<script>
export default {
  name: 'HeaderSearch',
  // data() {
  //   return {
  //     filterText: '',
  //   };
  // },
  mounted() {
    const input = document.querySelector('#search');
    let timeout;
    input.addEventListener('input', (e) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        this.$store.commit('updateFilter', e.target.value);
      }, 500);
    });
  },
};
</script>
<style lang="scss">

  .header {
    &__form {
      position: relative;;
    }
    &__input {
      border: 1px solid $border-color;
      border-radius: 0.3rem;
      height: 2.5rem;
      width: 15rem;
      padding: 0.5rem;
      padding-right: 2rem;
      &:focus {
        outline: none;
        border: 2px solid $main-color;
      }
    }
    &__search {
      position: absolute;
      top: .5rem;
      left: 13rem;
      font-weight: bold;
      color: $main-color;
    }
  }
</style>
