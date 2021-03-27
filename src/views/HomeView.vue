<template>
  <div class="home">
    <posts-wrapper/>
  </div>
</template>

<script>
// @ is an alias to /src
import PostsWrapper from '../components/PostsWrapper.vue';

export default {
  name: 'HomeView',
  components: {
    PostsWrapper,
  },
};
</script>

<style>

</style>
