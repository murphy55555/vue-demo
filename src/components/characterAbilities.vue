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
          <ability :score="a.score" :ability-type="a.type" v-on:score-changed="calculateAbilitySkillStrength" class="background-blue">
          </ability>
        </span>
    </div>
    <br>
    <div class="row">
      <div class="col-sm-12">
        <span>Your ability skills are
          <strong>{{abilitySkillStrength}}</strong>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Ability from "@/components/ability";

export default {
  components: {
    ability: Ability
  },
  props: ["abilities"],
  data() {
    return {
      abilitySkillStrength: ""
    };
  },
  methods: {
    calculateAbilitySkillStrength() {
      let currentCharacterAbilities = this.$store.state.currentCharacter.abilities;
      let sum = 0;
      for (let i = 0; i <  currentCharacterAbilities.length; i++) {
        sum += currentCharacterAbilities[i].score;
      }
      
      if (sum < 70) {
        this.abilitySkillStrength = "Below Average";
      } else if (sum > 70 && sum < 80) {
        this.abilitySkillStrength = "Average";
      } else if (sum > 80 && sum < 90) {
        this.abilitySkillStrength = "Powerful";
      } else if (sum >= 90) {
        this.abilitySkillStrength = "God Like";
      }
    }
  },
  created() {
    this.calculateAbilitySkillStrength();
  }
};
</script>

<style scoped>

</style>