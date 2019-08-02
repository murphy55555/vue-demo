import Vue from 'vue';
import Vuex from 'vuex'
import admin from './modules/admin';
import characterDetails from './modules/character-details';

Vue.use(Vuex);

let router = null;

export default new Vuex.Store({
    actions: {
        navigate(_, payload) {
            if (router) {
                router.push(payload);
            }
        }
    },
    modules: {
        admin,
        characterDetails
    }
});

export function useRouter(vRouter) {
    router = vRouter;
}
