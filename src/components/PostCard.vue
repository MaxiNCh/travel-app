<template>
  <div class="post">
    <img class="post__image" src="https://picsum.photos/250" alt="Image">
    <router-link class="post__link" :to="{ name: 'article', params: {id: this.postId}}">
      <h2 class="post__title">{{ this.title }}</h2>
    </router-link>
    <p class="post__text">
      {{ this.cutText }}<span v-if="isLong">...</span>
    </p>
    <p class="post__author">—{{this.userName}}, <span>{{this.localDate}}</span></p>
  </div>
</template>
<script>
export default {
  name: 'BasePost',
  props: {
    postId: {
      type: Number,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  computed: {
    cutText() {
      return this.text.slice(0, 25);
    },
    isLong() {
      return this.text.length > 25;
    },
    localDate() {
      return this.date.toLocaleDateString('ru');
    },
  },
};
</script>
<style lang="scss">

.post {
  width: 15rem;
  padding: 0 1rem .5rem;
  border: 1px solid $border-color;
  border-radius: 0.3rem;
  background: #fff;
  text-align: center;
  &__image {
    width: 100%;
  }
  &__link {
    text-decoration: none;
  }
  &__title {
    text-align: left;
    font-size: 1.1rem;
    font-weight: bold;
    text-decoration: none;
    color: $main-color;
    &:hover {
      opacity: 0.7;
    }
  }
  &__text {
    margin: .5rem 0;
    text-align: left;
    font-size: .9re;
  }
  &__author {
    text-align: left;
    opacity: 0.8;
    font-size: .9rem;
    font-style: italic;
  }
}
</style>
