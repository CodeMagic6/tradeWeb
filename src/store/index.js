import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

import home from '../pages/home/store'

export default new vuex.Store({
  modules: {
    home
  }
})