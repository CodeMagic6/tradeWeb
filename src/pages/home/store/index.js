import getters from './getters';
import mutations from './mutations';

const state = {
  activeTab: 0
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  // actions
};