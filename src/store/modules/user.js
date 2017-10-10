import api from '../../api/apiMocik';

const state = {
  list: [],
  user: null
};

const getters = {
  list(state) {
    return state.list;
  }
};

const mutations = {
  signInDone(state, payload) {
    state.user = payload;
    console.log('state', state);
  }
};

const actions = {
  signIn(context, payload) {
    api.signIn(payload)
      .then(data => {
        console.log('signInDone');
        localStorage.setItem('token', data.token);
        context.commit('signInDone', payload); // passing userData further
      });
  },
  signOut() {

  },
  getlist() {
    // use api.getUsers here
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
