import Vue from 'vue';
import Vuex from 'vuex'
import characterDetails from './modules/character-details';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        characterDetails
    }
});