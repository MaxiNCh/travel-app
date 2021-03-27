<template>
<div class="post-edit__wrapper">
  <form  id="post-edit" class="post-edit">
    <label for="text-edit">Text</label>
    <textarea
      id="text-edit"
      v-model="text"
      name="text"
      class="post-edit__textarea"
      required
    />
    <label for="title-edit">Title</label>
    <input
      id="title-edit"
      v-model="title"
      name="title"
      type="text"
      class="post-edit__input"
      required
    >
    <label for="date-edit">Date</label>
    <input
      id="date-edit"
      v-model="date"
      name="date"
      type="date"
      class="post-edit__input"
      required
    >
    <button
      id="post-edit-submit"
      type="submit"
      class="post-edit__btn"
    >Save</button>
    <button
      id="post-edit-cancel"
      type="button"
      class="post-edit__btn post-edit__btn--close"
    >Cancel</button>
  </form>
</div>
</template>

<script>
export default {
  name: 'PostArticleEdit',
  props: {
    idProp: {
      type: Number,
      required: true,
    },
    textProp: {
      type: String,
      required: true,
    },
    titleProp: {
      type: String,
      required: true,
    },
    dateProp: {
      type: Date,
      required: true,
    },
  },
  data() {
    return {
      text: '',
      date: '',
      title: '',
    };
  },
  mounted() {
    const cancelBtn = document.querySelector('#post-edit-cancel');
    const form = document.querySelector('#post-edit');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = e.target;
      const post = this.$store.state.posts.filter((item) => item.id === this.idProp)[0] ?? {};
      post.id = this.idProp;
      post.title = formData.title.value;
      post.body = formData.text.value;
      post.date = new Date(formData.date.value);
      this.$emit('submit', post);
      this.$emit('close');
    });
    cancelBtn.addEventListener('click', () => {
      this.$emit('close');
    });
    this.updateData();
  },
  methods: {
    updateData() {
      this.date = this.dateProp.toISOString().substr(0, 10);
      this.text = this.textProp;
      this.title = this.titleProp;
    },
  },
};
</script>

<style lang="scss">
  .post-edit {
    display: grid;
    grid-template-columns: 1fr 3fr;
    row-gap: 1.5rem;
    align-items: center;
    border: 2px solid $main-color;
    border-radius: 0.3rem;
    height: 70%;
    // width: 40%;
    padding: 3rem 5rem;
    background-color: #fff;
    opacity: 1;
    &__wrapper {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      background-color: rgba($color: #fff, $alpha: 0.7);
    }
    &__textarea{
      resize: none;
      width: 20rem;
      height: 15rem;
      border: 2px solid $border-color;
      border-radius: 0.3rem;
      padding: 0.5rem;
      &:focus {
        outline: none;
        border: 2px solid $main-color;
      }
    }
    &__input {
      border: 2px solid $border-color;
      border-radius: 0.3rem;
      height: 2.5rem;
      padding: 0.5rem;
      &:focus {
        outline: none;
        border: 2px solid $main-color;
      }
    }
    &__btn {
      transition: all 0.2s;
      border: 2px solid $main-color;
      border-radius: 0.3rem;
      height: 1.7rem;
      // width: 15rem;
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
      &--close {
        justify-self: flex-end;
        width: 7rem;
      }
    }
  }
</style>
