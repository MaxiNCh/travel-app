<template>
  <div class="profile-edit__wrapper">
    <form  id="profile-edit" class="profile-edit">
      <label for="profile-name-edit">Name:
        <span
          v-if="errors.name"
          class="profile-edit__error">* Must be not less than 3 and no more than 15 chars
        </span>
      </label>
      <input
        id="profile-name-edit"
        v-model="name"
        name="name"
        type="text"
        class="profile-edit__input"
        required
      >
      <label for="profile-email-edit">Email:
        <span
          v-if="errors.email"
          class="profile-edit__error">* Wrong format of email
        </span>
      </label>
      <input
        id="profile-email-edit"
        v-model="email"
        name="email"
        type="email"
        class="profile-edit__input"
        required
      >
      <input-file-drop/>
      <button
        id="profile-edit-submit"
        type="submit"
        class="profile-edit__btn"
      >Save</button>
      <button
        id="profile-edit-cancel"
        type="button"
        class="profile-edit__btn profile-edit__btn--close"
      >Cancel</button>
    </form>
  </div>
</template>

<script>
import InputFileDrop from './InputFileDrop.vue';

export default {
  components: { InputFileDrop },
  name: 'ProfileEdit',
  data() {
    return {
      name: '',
      email: '',
      errors: {
        name: false,
        email: false,
      },
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  mounted() {
    this.name = this.user.name;
    this.email = this.user.email;
    const cancelBtn = document.querySelector('#profile-edit-cancel');
    const form = document.querySelector('#profile-edit');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      Object.keys(this.errors).forEach((error) => {
        this.errors[error] = false;
      });
      const data = e.target;
      this.checkForm(data);
      if (!this.hasErrors()) {
        const user = {
          name: data.name.value,
          email: data.email.value,
          image: URL.createObjectURL(data.file.files[0]),
        };
        sessionStorage.setItem('user', JSON.stringify(user));
        this.$store.commit('authorize', user);
        this.$emit('close');
      }
    });

    cancelBtn.addEventListener('click', () => {
      this.$emit('close');
    });
  },
  methods: {
    checkForm(data) {
      const reEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      if (data.name.value.length < 3 || data.name.value.length > 15) {
        this.errors.name = true;
      }
      if (!reEmail.test(data.email.value)) {
        this.errors.email = true;
      }
    },
    hasErrors() {
      return Object.values(this.errors).some((error) => error);
    },
  },
};
</script>

<style lang="scss">
.profile-edit {
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
    width: 6rem;
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
      width: 6rem;
    }
  }
  & label {
    position: relative;
  }
  &__error {
    position: absolute;
    top: 2.1rem;
    left: 6rem;
    width: 20rem;
    font-size: 0.7rem;
    color: #f00;
  }
}
</style>
