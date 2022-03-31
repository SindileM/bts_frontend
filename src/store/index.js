import { createStore } from 'vuex';
import { auth } from './auth.model.js';

 const store = createStore({ 
  modules: {
    auth,
  },
});

export default store;

