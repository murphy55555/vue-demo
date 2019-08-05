import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

let router = null;

export default new Vuex.Store({
    actions: {
        navigate(_, payload) {
            if (router) {
                router.push(payload);
            }
        }
    }
});

export function useRouter(vRouter) {
    router = vRouter;
}
