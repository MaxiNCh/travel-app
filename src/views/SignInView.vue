<template >
  <main class="form__wrapper">
    <form id="sign-in-form" class="form">
      <label for="name">Name:
        <span
          v-if="errors.name"
          class="form__error">* Must be not less than 3 and no more than 15 chars
        </span>
      </label>
      <input
        id="sign-in-name"
        name="name"
        type="text"
        class="form__input"
        required
      >
      <label for="email">Email:
        <span
          v-if="errors.email"
          class="form__error">* Wrong format of email
        </span>
      </label>
      <input
        id="sign-in-email"
        name="email"
        type="email"
        class="form__input"
        required
      >
      <label for="pass">Password:
        <span
          v-if="errors.pass"
          class="form__error">* Must starts from capital letter, includ at least one digit,
                                <br>at least 8 characters
        </span>
      </label>
      <input
        id="sign-in-pass"
        name="pass"
        type="password"
        class="form__input"
        required
      >
      <input-file-drop/>
      <button id="sign-in-btn" class="form__submit" type="submit">
        Sign In
      </button>
    </form>
  </main>
</template>

<script>
import InputFileDrop from '../components/InputFileDrop.vue';

export default {
  name: 'SignInView',
  components: { InputFileDrop },
  data() {
    return {
      errors: {
        name: false,
        email: false,
        pass: false,
      },
    };
  },
  mounted() {
    const form = document.querySelector('#sign-in-form');
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
          pass: data.pass.vluae,
          image: URL.createObjectURL(data.file.files[0]),
          id: 2,
        };
        sessionStorage.setItem('user', JSON.stringify(user));
        this.$store.commit('authorize', user);
        this.$router.push('/');
      }
    });
  },
  methods: {
    checkForm(data) {
      const reEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      const rePass = /^[A-Z](?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

      if (data.name.value.length < 3 || data.name.value.length > 15) {
        this.errors.name = true;
      }
      if (!reEmail.test(data.email.value)) {
        this.errors.email = true;
      }
      if (!rePass.test(data.pass.value)) {
        this.errors.pass = true;
      }
    },
    hasErrors() {
      return Object.values(this.errors).some((error) => error);
    },
  },
};
</script>

<style lang="scss">
  .form {
    display: grid;
    grid-template-columns: 8rem 15rem;
    row-gap: 1.5rem;
    align-items: center;
    border: 2px solid $main-color;
    border-radius: 0.3rem;
    padding: 5rem;
    &__wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
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
    &__submit {
      grid-column: 1 / -1;
      justify-self: center;
      transition: all 0.2s;
      border: none;
      border-radius: 0.3rem;
      height: 2.5rem;
      width: 15rem;
      background-color: $main-color;
      cursor: pointer;
      font-size: 1rem;
      color: #fff;
      &:hover {
        background-color: #fff;
        border: 2px solid $main-color;
        color: $main-color;
      }
      &:focus {
        outline: none;
        border: 2px solid $main-color;
        background-color: #fff;
        color: $main-color;
      }
    }
    & label {
      position: relative;
    }
    &__error {
      position: absolute;
      top: 2.1rem;
      left: 8rem;
      width: 20rem;
      font-size: 0.7rem;
      color: #f00;
    }
  }
</style>
