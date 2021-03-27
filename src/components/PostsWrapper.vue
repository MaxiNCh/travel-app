<template>
  <main class="posts">
    <h1 class="posts__h1">Posts</h1>
    <h2 v-if="isEmpty" class="posts__h2">Nothing mathes</h2>
    <post-card
      v-for="{ userId, id, date, title, body } in filteredPosts"
      :key="id"
      :userName="userName(userId)"
      :postId="id"
      :date="date"
      :title="title"
      :text="body"
    />
  </main>
</template>

<script>
import { mapState } from 'vuex';
import PostCard from './PostCard.vue';

export default {
  name: 'PostsWrapper',
  components: { PostCard },
  computed: {
    ...mapState([
      'posts',
      'authors',
    ]),
    filteredPosts() {
      const sortedPosts = this.sortPosts(this.posts);
      return sortedPosts.filter((post) => post.title.includes(this.filterText));
    },
    isEmpty() {
      if (this.filteredPosts.length === 0) return true;
      return false;
    },
    filterText() {
      return this.$store.state.filterText;
    },
  },
  methods: {
    userName(id) {
      if (this.authors.filter((user) => user.id === id)[0]) {
        return this.authors.filter((user) => user.id === id)[0].name;
      }
      return '';
    },
    sortPosts(posts) {
      const sortedPosts = [...posts];
      return sortedPosts.sort((postA, postB) => {
        if (postA.date < postB.date) return 1;
        if (postB.date < postA.date) return -1;
        if (postB.date === postA.date && postA.title > postB.title) {
          return 1;
        }
        return -1;
      });
    },
  },
};
</script>

<style lang="scss">

.posts {
  display: grid;
  grid-template-columns: repeat(auto-fill, 15rem);
  justify-content: space-between;
  justify-items: center;
  row-gap: 2rem;
  min-height: 100%;
  padding: 2rem;
  background: $bg-color;
  &__h1 {
    grid-column: 1 / -1;
    font-size: 2rem;
    text-align: center;
  }
  &__h2 {
    text-align: center;
    grid-column: 1 / -1;
    width: 100%;
  }
}
</style>
