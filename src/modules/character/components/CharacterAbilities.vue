<template>
  <div>
    <div class="text-center title">Ability Scores</div>
    <v-layout wrap justify-center>
      <v-flex xl2 lg2 md3 sm4 xs6 v-for="a in abilities" :key="a.type">
        <CharacterAbility :score="a.score" :ability-type="a.type">
        </CharacterAbility>
      </v-flex>
    </v-layout>
    <v-layout justify-center>
      <v-alert type="info" class="d-inline-flex">
        Your ability skills are <strong>{{getAbilitySkillStrength}}</strong>
      </v-alert>
    </v-layout>
  </div>
</template>

<script>
import CharacterAbility from "./CharacterAbility";
import { mapState, mapGetters } from '../store';

export default {
  components: {
    CharacterAbility
  },
  computed: {
    ...mapState([
      'abilities'
    ]),
    ...mapGetters([
      'getAbilitySkillStrength'
    ])
  }
};
</script>

<style scoped>

</style>