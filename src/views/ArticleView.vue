<template>
  <main class="article">
    <post-article/>
  </main>
</template>

<script>
import PostArticle from '../components/PostArticle.vue';

export default {
  components: { PostArticle },
  name: 'ArticleView',
};
</script>

<style lang="scss">
  .article {
    padding: 2rem;
    background-color: $bg-color;
  }
</style>
