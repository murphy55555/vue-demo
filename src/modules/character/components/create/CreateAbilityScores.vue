<template>
  <div>
    <slot name="navButtons"></slot>
    <div class="flex display-1 font-italic font-weight-bold">Ability Scores</div>
    <br>
    <v-row>
      <v-col cols="4">
        <v-slider v-for="a in character.abilities" :key="a.type"
          v-model="a.score"
          :value="a.score"
          :min="0"
          :max="20"
          :label="a.type"
          thumb-label="always"
        ></v-slider>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "createAbilityScores",
  props:[
    "character"
  ],
  methods: {
  },
  computed: {},
  created() {

  }
};
</script>

<style>
</style>