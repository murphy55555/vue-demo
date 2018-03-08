<template>
  <div>
    <div class="abilityBox">
      {{abilityType}}
      <br>
      <input type='number' name="abilityScore" class="abilityValue" v-model.number="abilityScore" v-on:change="calculateBonus" v-validate="'required|between:1,20'">
      <br>
      <div v-show="errors.has('abilityScore')">
        <span class="text-danger">{{ errors.first('abilityScore') }}</span>
      </div>
      <span>Bonus:{{bonus}}</span>
    </div>
  </div>
</template>

<script>
import { CharacterService } from "@/services/character-service";

export default {
  name: "ability",
  props: ["abilityType", "score"],
  data: function() {
    return {
      bonus: "",
      abilityScore: this.score
    };
  },
  methods: {
    calculateBonus() {
      if (this.errors.any()) return;

      let bonus = CharacterService.getAbilityBonus(this.abilityScore);

      if (bonus > 0) {
        this.bonus = "+" + bonus.toString();
      } else {
        this.bonus = bonus.toString();
      }

      let changedAbility = {
        type: this.abilityType,
        newScore: this.abilityScore
      };

      // Commit the change
      this.$store.commit("updateAbility", changedAbility);

      // Notify parent components
      this.$emit("score-changed", changedAbility);
    }
  },
  created() {
    this.calculateBonus();
  }
};
</script>

<style>
.abilityBox {
  border: 2px solid;
}

.abilityValue {
  width: 40px;
}
</style>