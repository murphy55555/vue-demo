<template>
  <div class="abilities-box">
    <h3 class="text-center">Ability Scores</h3>
    <v-layout>
      <v-flex xs2 v-for="a in abilities" :key="a.type">
        <CharacterAbility :score="a.score" :ability-type="a.type" class="background-blue">
        </CharacterAbility>
      </v-flex>
    </v-layout>
    <div class="text-center">Your ability skills are
      <strong>{{getAbilitySkillStrength}}</strong>
    </div>
  </div>
</template>

<script>
import CharacterAbility from "./CharacterAbility";
import { mapState, mapGetters } from 'vuex';

export default {
  components: {
    CharacterAbility
  },
  computed: {
    ...mapState('characterDetails', [
      'abilities'
    ]),
    ...mapGetters('characterDetails', [
      'getAbilitySkillStrength'
    ])
  }
};
</script>

<style scoped>

</style>