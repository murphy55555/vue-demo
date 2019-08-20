<template>
  <div>
    <slot name="navButtons"></slot>
    <div class="flex display-1 font-italic font-weight-bold">General Character Information</div>
    <v-form>
      <v-container>
        <v-row>
          <v-col
            cols="8"
            md="4"
          >
            <v-text-field
              v-model="character.name"
              label="Character Name"
              v-validate="'required|characterNameIsUnique'"
              name="charName"
              :error-messages="errors.collect('charName')"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="8"
            md="4"
          >
            <v-select
              label="Race"
              v-validate="'required'"
              v-model="character.race"
              :items="availableRaces"
              name="charRace"
              :error-messages="errors.collect('charRace')"
            >
            </v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="8"
            md="4"
          >
            <v-select
              label="Class"
              v-validate="'required'"
              v-model="character.characterClass"
              :items="availableClasses"
              name="charClass"
              :error-messages="errors.collect('charClass')"
            >
            </v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="8"
            md="4"
          >
            <v-text-field
              v-model="character.level"
              v-validate="'required|between:1,20'"
              label="Level"
              type="number"
              name="charLevel"
              :error-messages="errors.collect('charLevel')"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>

</template>

<script>
import { getRaces, getClasses, getCharacters} from "../../services/character-service";
import { Validator } from 'vee-validate';
const errMessageDictionary = {
   en: {
    attributes: {
      charName: 'Character Name',
      charRace: 'Character Race',
      charClass: 'Character Class',
      charLevel: 'Character Level',
    }
  }
}
Validator.localize(errMessageDictionary);
Validator.extend('characterNameIsUnique', {
  getMessage: () => 'You already have a character with this name.',
  validate: (value) => {
    let existingCharacter = getCharacters().find(c=>c.name === value);
    return existingCharacter ? false : true;
  }
});

export default {
  name: "createBasicInfo",
  props:[
    "character"
  ],
  data() {
    return {
      availableRaces: [],
      availableClasses: [],
    };
  },
  methods: {},
  computed: {},
  created() {
    this.availableRaces = getRaces();
    this.availableClasses = getClasses();
  }
};
</script>

<style>
</style>