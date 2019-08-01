import * as CharacterService from '@/services/character-service';

const state = {
    name: '',
    race: '',
    characterClass: '',
    level: 0,
    weapon: null,
    armor: null,
    abilities: null
}

// MUTATIONS
const mutations = {
    loadCharacter(state, character) {
        state.name = character.name;
        state.race = character.race;
        state.characterClass = character.characterClass;
        state.level = character.level;
        state.weapon = character.weapon;
        state.armor = character.armor;
        state.abilities = character.abilities;
    },
    updateAbility(state, changedAbility) {
        let ability = state.abilities.find(a => a.type === changedAbility.type);
        ability.score = changedAbility.newScore;
    },
    updateWeapon(state, newWeapon) {
        state.weapon = newWeapon;
    },
    updateArmor(state, newArmor) {
        state.armor = newArmor;
    }
}

const getters = {
    getDmg(state) {
        return CharacterService.getDMG(state.weapon, state.abilities);
    },
    getAc(state) {
        return CharacterService.getAC(state.armor, state.abilities);
    },
    getAbilitySkillStrength() {
        const sum = state.abilities.reduce((sum, ability) => sum + ability.score, 0);
        
        if (sum < 70) {
          return "Below Average";
        } else if (sum < 80) {
          return "Average";
        } else if (sum < 90) {
          return "Powerful";
        } else {
          return "God Like";
        }
    }
}

// ACTIONS
const actions = ({
    loadCharacter({ commit }, params) {
        // Imagine this is a webservice call and is async
        let character = CharacterService.getCharacter(params.characterName);
        commit("loadCharacter", character);
        return character;
    }
});

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};