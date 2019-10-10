<template>
  <div>
    <slot name="navButtons"></slot>
    <div class="flex display-1 font-italic font-weight-bold">Confirm Character</div>
    <v-row>
      <v-col
        cols="4"
        offset="2"
      >
        <v-card class="my-8">
          <v-card-title>{{character.name}}</v-card-title>
          <v-card-text>
            <v-row align="center">
              <div class="grey--text ml-4">{{"Level " + character.level + " " + character.race + " " + character.characterClass}}</div>
            </v-row>
          </v-card-text>
          <v-divider class="mx-4"></v-divider>
          <v-card-text>
            <div class="title text--primary">Abilities</div>
            <v-chip-group
              active-class="deep-purple accent-4 white--text"
              column
            >
              <v-chip
                v-for="a in character.abilities"
                :key="a.type"
              >
                {{a.type + " " + a.score}}
              </v-chip>
            </v-chip-group>
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="deep-purple accent-4"
              text
              @click="createCharacterAndRedirect"
            >
              Create!
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

  </div>
</template>

<script>
import { mapActions } from "../../store";

export default {
  name: "confirmCreation",
  props: ["character"],
  methods: {
    ...mapActions(["createCharacter"]),
    createCharacterAndRedirect(){
      this.createCharacter(this.character);
      this.$router.push({ name: "characterSearch" });
    }
  },
  computed: {}
};
</script>

<style>
</style>