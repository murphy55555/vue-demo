<template>
  <div>
    <v-menu offset-y>
      <template #activator="{ on }">
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
    <br />
    <CharacterBasicInfo></CharacterBasicInfo>
    <br />
    <CharacterStats></CharacterStats>
    <br />
    <CharacterAbilities></CharacterAbilities>
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
  props: [
    "characterName"
  ],
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
</style>