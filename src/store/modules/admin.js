import { attemptLogin, isLoggedIn } from '@/services/admin-service';

const state = () => ({
    errorMessage: null,
    loggedIn: isLoggedIn()
});

const mutations = {
    setLoggedIn(state, loggedIn) {
        state.isLoggedIn = loggedIn;
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
    clearError({ commit }) {
        commit("clearErrorMessage");
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};
