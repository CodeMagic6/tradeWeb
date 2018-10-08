import types from './types';

const {
  ACTIVETAB
} = types;

export default {
  [ACTIVETAB](state, activeTab) {
    state.activeTab = activeTab;
  }
}