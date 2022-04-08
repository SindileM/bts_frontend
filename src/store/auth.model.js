import authService from "../services/auth.service";
const user = JSON.parse(localStorage.getItem("user"));
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };
export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    signin({ commit }, user) {
      return authService.signin(user).then(
        (user) => {
          commit("signinSuccess", user);
          return Promise.resolve(user);
        },
        (error) => {
          commit("signinFailure");
          return Promise.reject(error);
        }
      );
    },
    logout({ commit }) {
      authService.logout();
      commit("logout");
    },
    signup({ commit }, user) {
      return authService.signup(user).then(
        (response) => {
          commit("signupSuccess");
          return Promise.resolve(response.data);
        },
        (error) => {
          commit("signupFailure");
          return Promise.reject(err.message);
        }
      );
    },
  },
  mutations: {
    signinSuccess(state, user) {
      state.status.loggedIn = true;
      state.user = user;
    },
    signinFailure(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    logout(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    signupSuccess(state) {
      state.status.loggedIn = false;
    },
    signupFailure(state) {
      state.status.loggedIn = false;
    },
  },
};
