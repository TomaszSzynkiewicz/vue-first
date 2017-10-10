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
  },
  signOut(state) {
    state.user = null;
    localStorage.removeItem('token');
  }
};

const actions = {
  signIn(context, payload) {
    api.signIn(payload)
      .then(data => {
        localStorage.setItem('token', data.token);
        context.commit('signInDone', payload); // passing userData further
      });
  },
  authenticateToken(context, token) {
    context.commit('signInDone', { email: token });
  },
  signOut(context) {
    context.commit('signOut');
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
