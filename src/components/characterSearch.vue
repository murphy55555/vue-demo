<template>
  <div>
    <div class="row">
      <div class="col-sm-10">
        <form class="form-inline">
          <div class="form-group">
            <select class="form-control" v-model="characterClass" v-on:change="filter">
              <option>All Classes</option>
              <option>Druid</option>
              <option>Wizard</option>
              <option>Fighter</option>
              <option>Thief</option>
            </select>
          </div>
          <div class="form-group">
            <input type="text" v-model="characterName" v-on:input="filter" class="form-control" placeholder="Character Name">
          </div>
          <div class="form-group">
            <input type="number" v-model.number="level" v-on:input="filter" class="form-control" placeholder="Level">
          </div>
        </form>
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col-sm-10">
        <table class="table table-bordered table-hover table-striped">
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
              <td>{{character.name}}</td>
              <td>{{character.level}}</td>
              <td>{{character.race}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

</template>

<script>
import { CharacterService } from "@/services/character-service";
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
      this.characters = CharacterService.getCharacters();

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
    this.characters = CharacterService.getCharacters();
  }
};
</script>

<style scoped>

</style>