<template>
  <footer class="footer">
    <p class="footer__p">Copyright © 2021 Zaboronkin Maxim. All rights reserved.</p>
    <base-logo/>
  </footer>
</template>
<script>
import BaseLogo from './BaseLogo.vue';

export default {
  components: { BaseLogo },
  name: 'TheFooter',
};
</script>

<style lang='scss'>
.footer {
  grid-row: -1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 5px solid $main-color;
  padding: 1rem 2rem;
  background-color: $bg-color;
  font-size: .8rem;
}
</style>
