import Vue from 'vue';
import Vuex from 'vuex'
import { CharacterService } from '@/services/character-service';
Vue.use(Vuex);

// STATE
const state = {
    currentCharacter: {}
}

// MUTATIONS
const mutations = {
    loadCharacter(state, character) {
        state.currentCharacter = character;
    },
    updateAbility(state, changedAbility) {
        let ability = state.currentCharacter.abilities.filter(a => a.type === changedAbility.type)[0];
        ability.score = changedAbility.newScore;
        state.currentCharacter.calculateDMG();
        state.currentCharacter.calculateAC();
    },
    updateWeapon(state, newWeapon) {
        state.currentCharacter.Weapon = newWeapon;
    },
    updateArmor(state, newArmor) {
        state.currentCharacter.Armor = newArmor;
    }
}

// ACTIONS
const actions = ({
    loadCharacter({ commit }, params) {
        // Imagine this is a webservice call and is async
        let character = CharacterService.getCharacter(params.characterName);
        commit("loadCharacter", character);
        return character;
    },
});

export default new Vuex.Store({
    state,
    mutations,
    actions
});