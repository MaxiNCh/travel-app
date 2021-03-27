<template>
  <div v-if="isLoaded">
    <img class="article__img" src="https://picsum.photos/300" alt="article-image">
    <h1 class="article__title">{{this.post.title}}</h1>
    <p class="article__text">{{this.post.body}}
    </p>
    <div class="article__bottom"><span>― {{this.author}}, <span>{{this.localDate}}</span></span>
      <a class="article__edit-btn">
        <span class="article__edit-icon material-icons">edit</span>
        Edit
      </a>
    </div>
    <post-article-edit
      v-if="editOpen"
      :textProp="post.body"
      :titleProp="post.title"
      :dateProp="post.date"
      :idProp="post.id"
      @submit="updatePost"
      @close="closeModal"
    />
  </div>
</template>
<script>
import PostArticleEdit from './PostArticleEdit.vue';

export default {
  components: { PostArticleEdit },
  name: 'PostArticle',
  data() {
    return {
      editOpen: false,
    };
  },
  computed: {
    isLoaded() {
      return this.$store.state.isLoaded;
    },
    post() {
      const postId = this.$route.params.id;
      return this.$store.state.posts.filter((post) => post.id === postId)[0];
    },
    localDate() {
      return this.post.date.toLocaleDateString('ru');
    },
    author() {
      const { userId } = this.post;
      return this.$store.state.authors.filter((user) => user.id === userId)[0].name;
    },
  },
  mounted() {
    const editBtn = document.querySelector('.article__edit-btn');
    if (editBtn !== null) {
      editBtn.addEventListener('click', () => { this.editOpen = true; });
    }
  },
  methods: {
    closeModal() {
      this.editOpen = false;
    },
    updatePost(post) {
      this.$store.commit('updatePost', post);
    },
  },
};

</script>
<style lang="scss">
  .article {
    &__img {
      float: left;
      margin-right: 2rem;
      margin-bottom: 1rem;
    }
    &__title {
      font-size: 1.5rem;
    }
    &__text {
      margin: 1rem 0;
      line-height: 1.3rem;
    }
    &__bottom {
      display: grid;
      align-items: flex-end;
      grid-template-columns: auto auto;
      justify-content: space-between;
      width: 100%;
      font-style: italic;
    }
    &__edit-btn {
      display: flex;
      align-items: flex-end;
      cursor: pointer;
      color: #999;
      &:hover {
        color: $main-color;
      }
    }
    &__edit-icon {
      font-size: 1.1rem;
    }
  }
</style>
