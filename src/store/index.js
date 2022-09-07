import { createStore } from 'vuex';
import axios from 'axios';
import router from '@/router';
import createPersistedState from 'vuex-persistedstate';
// const localStorage = {localStorage}
// axios.defaults.headers.common[Authorization] = `Bearer ${localStorage.getItem('access_token')}`;

const bookLib = 'https://capstone-fullstack-project.herokuapp.com/';
export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    userMsg: null,
    isLoading: true,

    about: [
      {
        id: '1',
        aboutpara: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam dolorum sed mollitia minima labore error, sint cumque, enim hic provident optio eos repellat natus repudiandae nesciunt alias molestiae fugit possimus! Numquam ab facere sint facilis sequi, nesciunt mollitia. Libero, incidunt.'
      },
      {
        id: '2',
        aboutpara: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam dolorum sed mollitia minima labore error, sint cumque, enim hic provident optio eos repellat natus repudiandae nesciunt alias molestiae fugit possimus! Numquam ab facere sint facilis sequi, nesciunt mollitia. Libero, incidunt.'
      },
      {
        id: '3',
        aboutpara: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam dolorum sed mollitia minima labore error, sint cumque, enim hic provident optio eos repellat natus repudiandae nesciunt alias molestiae fugit possimus! Numquam ab facere sint facilis sequi, nesciunt mollitia. Libero, incidunt.'
      },
      {
        id: '4',
        aboutpara: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam dolorum sed mollitia minima labore error, sint cumque, enim hic provident optio eos repellat natus repudiandae nesciunt alias molestiae fugit possimus! Numquam ab facere sint facilis sequi, nesciunt mollitia. Libero, incidunt.'
      },
      {
        id: '5',
        aboutpara: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam dolorum sed mollitia minima labore error, sint cumque, enim hic provident optio eos repellat natus repudiandae nesciunt alias molestiae fugit possimus! Numquam ab facere sint facilis sequi, nesciunt mollitia. Libero, incidunt.'
      },
      {
        id: '6',
        aboutpara: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam dolorum sed mollitia minima labore error, sint cumque, enim hic provident optio eos repellat natus repudiandae nesciunt alias molestiae fugit possimus! Numquam ab facere sint facilis sequi, nesciunt mollitia. Libero, incidunt.'
      }
    ],
    pictures: [

      {
        id: '1',
        img: 'https://i.postimg.cc/nLzMDK7d/brittani-burns-98u-YQ-Kupi-E-unsplash.jpg',
        desc: ''
      },
      {
        id: '2',
        img: 'https://i.postimg.cc/m2msFvws/millo-lin-Ibng-TBp-Nu-MA-unsplash.jpg',
        desc: ''
      },
      {
        id: '3',
        img: 'https://i.postimg.cc/hjBwYsrs/stefan-moertl-Mh-Di-W1c73-GI-unsplash.jpg',
        desc: ''
      },
      {
        id: '4',
        img: 'https://i.postimg.cc/zvRgRwmm/sincerely-media-vc-F5y2-Edm6-A-unsplash.jpg',
        desc: ''
      },
      {
        id: '5',
        img: 'https://i.postimg.cc/QNp5sbq5/ian-schneider-Tam-Mbr4okv4-unsplash.jpg',
        desc: ''
      },
      {
        id: '6',
        img: 'https://i.postimg.cc/QdRxFL8M/hello-i-m-nik-z1d-LP8sju-I-unsplash.jpg',
        desc: ''
      }
    ]
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
      const res = await axios.get(bookLib + 'user');
      const { results } = await res.data;
      if (results) {
        context.commit('setUser', results);
      }
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
      }
      if (err) {
        context.commit('setUserMsg', err);
        context.commit('setLoading', true);
      }
    },
    login: async (context, payload) => {
      const { email, password } = payload;
      const data = {
        email,
        password
      };
      const res = await axios.post(bookLib + 'users/login', data);
      const results = await res.data;
      if (results) {
        // console.log(results);
        // context.commit('SetUser', results);
        router.push({ name: 'user' });
      }
    },
    getfavourites: (context, id) => {
      if (context.state.users.user_id === null) {
        console.log('Please Login');
        // alert('Please Login');
      } else {
        id = context.state.users.user_id;
        fetch(`https://capstone-fullstack-project.herokuapp.com/users/${id}/favourites`, {
          method: 'GET',
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.results != null) {
              context.commit('setfavourites', (data.results));
            }
          });
      }
    },

    addTofavourites: async (context, product, id) => {
      console.log(product);
      if (context.state.users === null) {
        console.log('Please Login');
        // alert('Please Login');
      } else {
        id = context.state.users.user_id;
        fetch(`https://capstone-fullstack-project.herokuapp.com/users/${id}/favourites`, {
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

    DeletItem: async (context, product, id) => {
      console.log(product);
      id = context.state.users.user_id;
      fetch(`https://capstone-fullstack-project.herokuapp.com/users/${id}/favourites/${product}`, {
        method: 'DELETE',
        body: JSON.stringify(product),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
          // "x-auth-token": context.state.token,
        }
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          context.dispatch('getfavourites', (id));
        });
    }
  },
  modules: {
  },
  plugins: [createPersistedState()]
});
