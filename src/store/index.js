import { createStore } from 'vuex';
import axios from 'axios';
import createPersistedState from 'vuex-persistedstate';
import router from '@/router';

const bookLib = 'https://capstone-fullstack-project.herokuapp.com/';
export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    userMsg: null,
    isLoading: true,
    favourites: []
  },
  getters: {
    getUsers: state => state.users,
    getProducts: state => state.products

  },
  mutations: {

    setUsers (state, values) {
      state.users = values;
    },
    setUser (state, value) {
      state.user = value;
    },
    setProducts (state, values) {
      state.products = values;
    },
    setProduct (state, value) {
      state.product = value;
    },
    setfavourites: (state, favourites) => {
      state.favourites = favourites;
      console.log(favourites);
    },
    setUserMsg (state, value) {
      state.userMsg = value;
    },
    setLoading (state, value) {
      state.isLoading = value;
    }

  },
  actions: {
    fetchProducts: async (context) => {
      const res = await axios.get(bookLib + 'products');
      const { results } = await res.data;
      if (results) {
        context.commit('setProducts', results);
      }
    },
    fetchProduct: async (context, id) => {
      const res = await axios.get(bookLib + 'products/' + id);
      console.log(res.data);
      const { results } = await res.data;
      if (results) {
        context.commit('setProduct', results);
      }
    },
    fetchUsers: async (context) => {
      const res = await axios.get(bookLib + 'users');
      const { results } = await res.data;
      if (results) {
        context.commit('setUsers', results);
      }
    },
    fetchUser: async (context) => {
      const res = await axios.get(bookLib + 'user/' + user_id);
      const { results } = await res.data;
      if (results) {
        context.commit('setUser', results);
      }
    },
    deleteUser: async (context, id) => {
      fetch(`${bookLib}/users/${id}`, {
        method: 'DELETE'
      })
        .then((response) => response.json())
        .then(() => context.dispatch('getUser'));
    },

    register: async (context, payload) => {
      const { firstName, lastName, email, password } = payload;
      const data = {
        firstName,
        lastName,
        email,
        password
      };
      const res = await axios.post(bookLib + 'users/register', data);
      const { results, msg, err } = await res.data;
      if (msg) {
        context.commit('setUsers', results);
        context.commit('setUserMsg', msg);
        context.commit('setLoading', false);
        console.log(results);
      }
      axios.get('https://capstone-fullstack-project.herokuapp.com/products/')
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log('Error', error.message);
          }
        });
      axios.get('https://capstone-fullstack-project.herokuapp.com/users/')
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log('Error', error.message);
          }
        });
      if (err) {
        context.commit('setUserMsg', err);
        context.commit('setLoading', true);
      }
    },
    login: async (context, payload) => {
      const { email, password } = payload;
      const data = {
        email: email,
        password: password
      };
      const res = await axios.post(bookLib + 'users/login', data);
      const results = await res.data;
      if (results) {
        console.log(results);
        context.commit('SetUser', results);
        router.push({ name: 'admin' });
      }
    },
    getfavourites: (context, user_id) => {
      if (context.state.users.user_id === null) {
        console.log('Please Login');
      } else {
        user_id = context.state.users.user_id;
        fetch(`${bookLib}/users/${user_id}`, {
          method: 'GET',
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.results != null) {
              context.commit('setfavourites', (data.results));
            }
          });
      }
    },
    getUser: async (context, user_id
    ) => {
      fetch(bookLib + user_id)
        .then((response) => response.json())
        .then((user) => context.commit('setUser', user[0]));
    },
    addTofavourites: async (context, product, id) => {
      console.log(product);
      if (context.state.users === null) {
        console.log('Please Login');
      } else {
        id = context.state.users.user_id;
        fetch(`${bookLib}/users/${user_id}/favourites`, {
          method: 'POST',
          body: JSON.stringify(product),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            context.dispatch('getfavourites', (id));
          });
      }
    },

    deletItem: async (context, product, user_id) => {
      console.log(product);
      user_id = context.state.users.user_id;
      fetch(`${bookLib}/users/${user_id}/favourites/${product}`, {
        method: 'DELETE',
        body: JSON.stringify(product),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          context.dispatch('getfavourites', (user_id));
        });
    }
  },
  modules: {
  },
  plugins: [createPersistedState()]
});
