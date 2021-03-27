// import { resolve } from 'core-js/fn/promise';
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex, axios);

const API = 'https://jsonplaceholder.typicode.com';

export default new Vuex.Store({
  state: {
    posts: [],
    authors: [],
    filterText: '',
    isLoaded: false,
    user: {
      name: '',
      email: '',
    },
    // isAuthorized: false,
  },
  getters: {
    isAuthorized: (state) => {
      if (sessionStorage.getItem('user') !== null || state.user.name !== '') {
        return true;
      }
      return false;
    },
  },
  mutations: {
    setPosts(state, payload) {
      const posts = payload;
      // Set random date
      function randomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
      }
      for (let i = 0; i < posts.length; i += 1) {
        if (posts[i].date === null || posts[i].date === undefined) {
          posts[i].date = randomDate(new Date(2012, 0, 1), new Date());
        } else {
          posts[i].date = new Date(posts[i].date);
        }
      }
      state.posts = posts;
    },
    setUsers(state, payload) {
      state.authors = payload;
    },
    updateFilter(state, payload) {
      state.filterText = payload;
    },
    hasLoaded(state) {
      state.isLoaded = true;
    },
    addPost(state, payload) {
      state.posts.push(payload);
      sessionStorage.setItem('posts', JSON.stringify(state.posts));
    },
    updatePost(state, payload) {
      const postId = payload.id;
      const postIndex = state.posts.findIndex((item) => item.id === postId)[0];
      state.posts[postIndex] = { ...payload };
      sessionStorage.setItem('posts', JSON.stringify(state.posts));
    },
    authorize(state, user) {
      state.user = { ...state.user, ...user };
      state.authors.forEach((author, index) => {
        if (author.id === user.id) {
          state.authors[index].name = user.name;
        }
      });
    },
  },
  actions: {
    fetchData({ commit }) {
      const fetchPosts = axios
        .get(`${API}/posts`)
        .then((response) => {
          commit('setPosts', response.data);
          sessionStorage.setItem('posts', JSON.stringify(response.data));
        })
        .catch((err) => {
          throw new Error(err);
        });
      const fetchUsers = axios
        .get(`${API}/users`)
        .then((response) => {
          commit('setUsers', response.data);
          sessionStorage.setItem('users', JSON.stringify(response.data));
        })
        .catch((err) => {
          throw new Error(err);
        });
      Promise.all([fetchPosts, fetchUsers]).then(() => {
        commit('hasLoaded');
      });
    },
  },
  modules: {
  },
});
