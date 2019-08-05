<template>
<div>
  <v-layout justify-center>
    <v-flex
      xs2
      >
      <v-select
        v-model="characterClass"
        label="Class"
        :items="['All Classes', 'Druid', 'Wizard', 'Fighter', 'Thief']"
        @change="filter"
      ></v-select>
    </v-flex>
    <v-flex
      xs2
      >
      <v-text-field
        v-model="characterName"
        label="Character Name"
        @input="filter"
      ></v-text-field>
    </v-flex>
    <v-flex
      xs2
      >
      <v-text-field
        v-model.number="level"
        label="Character Level"
        type="number"
        @input="filter"
      ></v-text-field>
    </v-flex>
  </v-layout>
  <v-layout justify-center>
    <v-flex xs10>
    <v-simple-table>
      <thead>
        <tr>
          <th>Class</th>
          <th>Name</th>
          <th>Level</th>
          <th>Race</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="character in characters" v-bind:key="character.name">
          <td>{{character.characterClass}}</td>
          <td> <router-link :to="{ name: 'characterDetail', params: { characterName: character.name }}">{{character.name}}</router-link></td>
          <td>{{character.level}}</td>
          <td>{{character.race}}</td>
        </tr>
      </tbody>
    </v-simple-table>
    </v-flex>
  </v-layout>
</div>
</template>

<script>
import { getCharacters } from "../services/character-service";
export default {
  data() {
    return {
      characters: [],
      characterName: null,
      characterClass: "All Classes",
      level: null
    };
  },
  methods: {
    filter() {
      this.characters = getCharacters();

      if (this.characterName) {
        this.characters = this.characters.filter(c =>
            c.name.toLowerCase().startsWith(this.characterName));
      }

      if (this.level) {
        this.characters = this.characters.filter(c =>
            c.level === this.level);
      }

      if (this.characterClass !== "All Classes") {
        this.characters = this.characters.filter(c =>
            c.characterClass === this.characterClass);
      }
    }
  },
  created() {
    this.characters = getCharacters();
  }
};
</script>

<style scoped>

</style>