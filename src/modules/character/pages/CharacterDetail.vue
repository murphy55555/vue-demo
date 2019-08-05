<template>
  <div>
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          color="primary"
          dark
          v-on="on"
        >
          Characters
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(character, index) in characters"
          :key="index"
          :to="{ name: 'characterDetail', params: { characterName: character.name }}"
        >
          <v-list-item-title>{{character.name}}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <br>
    <CharacterBasicInfo class="calledout-component background-green"></CharacterBasicInfo>
    <CharacterStats class="calledout-component background-grey"></CharacterStats>
    <CharacterAbilities class="calledout-component background-brown"></CharacterAbilities>
  </div>
</template>

<script>
import CharacterAbilities from "../components/CharacterAbilities";
import CharacterBasicInfo from "../components/CharacterBasicInfo";
import CharacterStats from "../components/CharacterStats";
import { mapActions } from '../store';
import { getCharacters } from '../services/character-service';

export default {
  components: {
    CharacterBasicInfo,
    CharacterStats,
    CharacterAbilities
  },
  props: {
    characterName: String
  },
  data() {
    return {
      characters: []
    }
  },
  methods: {
    ...mapActions([
        'loadCharacter'
    ])
  },
  watch: {
    characterName: {
      handler(newVal) {
        this.loadCharacter({ characterName: newVal });
      },
      immediate: true
    }
  },
  created() {
    this.characters = getCharacters();
  }
};
</script>

<style>
.calledout-component {
  border: 2px solid;
  padding: 10px;
  margin: 2px;
}
.background-green {
  background-color: aquamarine;
}
.background-grey {
  background-color: lightgrey;
}
.background-brown {
  background-color: wheat;
}
.background-blue {
  background-color: paleturquoise !important;
}
</style>