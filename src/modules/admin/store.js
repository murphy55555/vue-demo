import store from '@/store';

import { attemptLogin, isLoggedIn } from './services/admin-service';
import { createNamespacedHelpers } from 'vuex';

const state = () => ({
    errorMessage: null,
    loggedIn: isLoggedIn()
});

const mutations = {
    setLoggedIn(state, loggedIn) {
        state.loggedIn = loggedIn;
    },
    clearErrorMessage(state) {
        state.errorMessage = null;
    },
    setErrorMessage(state, errorMessage) {
        state.errorMessage = errorMessage;
    }
}

const actions = {
    attemptLogin({ commit, dispatch }, { username, password }) {
        const loginResult = attemptLogin(username, password);
        if (loginResult.success) {
            commit('clearErrorMessage');
            commit('setLoggedIn', true);
            dispatch('navigate', { name: 'characterSearch' }, { root: true });
        } else {
            commit('setErrorMessage', loginResult.message);
        }
    },
    clearError({ commit, state }) {
        if (state.errorMessage) {
            commit("clearErrorMessage");
        }
    }
};

store.registerModule('admin', {
    namespaced: true,
    state,
    mutations,
    actions
});

export const { mapActions, mapGetters, mapMutations, mapState } = createNamespacedHelpers('admin');