<template>
  <div class="abilities-box">
    <div class="row">
      <div class="col-sm-12">
        <span class="h3">Ability Scores</span>
      </div>
    </div>
    <br>
    <div class="row">
        <span v-for="a in abilities" v-bind:key="a.type" class="ability-box col-sm-2">
          <CharacterAbility :score="a.score" :ability-type="a.type" class="background-blue">
          </CharacterAbility>
        </span>
    </div>
    <br>
    <div class="row">
      <div class="col-sm-12">
        <span>Your ability skills are
          <strong>{{getAbilitySkillStrength}}</strong>
        </span>
      </div>
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