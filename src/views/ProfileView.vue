<template>
  <main class="profile">
    <img class="profile__img" :src="user.image" alt="">
    <div class="profile__body">
      <h1 class="profile__name">{{this.user.name}}</h1>
      <p>Email: {{this.user.email}}</p>
      <a class="profile__edit-btn">
        <span class="profile__edit-icon material-icons">edit</span>
        Edit
      </a>
      <ul class="profile__ul">Posts
        <li v-for="post in posts" :key=post.id>Title: {{post.title}}</li>
      </ul>
      <button type="button" class="profile__add-btn">Add post</button>
    </div>
    <profile-edit
      v-if="profileEditOpen"
      @close="closeProfileEdit"
    />
    <post-article-edit
      v-if="articleEditOpen"
      :textProp="''"
      :titleProp="''"
      :dateProp="new Date()"
      :idProp="getNewId()"
      @submit="createPost"
      @close="closeArticleEdit"
    />
  </main>
</template>
<script>
import PostArticleEdit from '../components/PostArticleEdit.vue';
import ProfileEdit from '../components/ProfileEdit.vue';

export default {
  components: { ProfileEdit, PostArticleEdit },
  name: 'ProfileView',
  data() {
    return {
      profileEditOpen: false,
      articleEditOpen: false,
      post: {},
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    posts() {
      return this.$store.state.posts.filter((post) => post.userId === this.user.id);
    },
  },
  mounted() {
    const profileEditBtn = document.querySelector('.profile__edit-btn');
    const articleEditBtn = document.querySelector('.profile__add-btn');

    if (profileEditBtn !== null) {
      profileEditBtn.addEventListener('click', () => {
        this.profileEditOpen = true;
      });
    }
    if (articleEditBtn !== null) {
      articleEditBtn.addEventListener('click', () => {
        this.articleEditOpen = true;
      });
    }
  },
  methods: {
    closeProfileEdit() {
      this.profileEditOpen = false;
    },
    closeArticleEdit() {
      this.articleEditOpen = false;
    },
    getNewId() {
      const { posts } = this.$store.state;
      const newId = posts.reduce((acc, post) => Math.max(acc, post.id), 0) + 1;
      return newId;
    },
    createPost(post) {
      const newPost = { ...post };
      newPost.userId = this.user.id;
      this.$store.commit('addPost', newPost);
    },
  },
};
</script>

<style lang="scss">
  .profile {
    display: flex;
    grid-template-columns: auto auto;
    min-height: 100%;
    padding: 2rem;
    background-color: $bg-color;
    &__img {
      padding-right: 2rem;
      max-height: 20rem;
    }
    &__name {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    &__ul {
      margin: 1rem 0;
      line-height: 1.5rem;
      font-weight: bold;
      & li {
        line-height: 1.5rem;
        font-weight: normal
      }
    };
    &__edit-btn {
      display: flex;
      align-items: flex-end;
      margin-top: 1rem;
      cursor: pointer;
      color: #999;
      &:hover {
        color: $main-color;
      }
    }
    &__edit-icon {
      font-size: 1.1rem;
    }
    &__add-btn {
      transition: all 0.2s;
      border: 2px solid $main-color;
      border-radius: 0.3rem;
      height: 1.7rem;
      width: 10rem;
      background-color: $main-color;
      cursor: pointer;
      font-size: 1rem;
      color: #fff;
      &:hover {
        background-color: #fff;
        color: $main-color;
      }
      &:focus {
        outline: none;
        border: 2px solid $main-color;
        background-color: #fff;
        color: $main-color;
      }
    }
  }

</style>
