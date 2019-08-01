<template>
  <div>
    <div class="abilityBox">
      {{abilityType}}
      <br>
      <input type='number' name="abilityScore" class="abilityValue" v-model.number="abilityScore" v-on:change="abilityChanged" v-validate="'required|between:1,20'">
      <br>
      <div v-show="errors.has('abilityScore')">
        <span class="text-danger">{{ errors.first('abilityScore') }}</span>
      </div>
      <span>Bonus:{{bonus}}</span>
    </div>
  </div>
</template>

<script>
import { getAbilityBonus } from "@/services/character-service";
import { mapMutations } from 'vuex';

export default {
  name: "ability",
  props: ["abilityType", "score"],
  data: function() {
    return {
      abilityScore: this.score
    };
  },
  methods: {
    abilityChanged() {
      // TODO: should this validate before updating the store or always update the store? https://baianat.github.io/vee-validate/examples/vuex.html#demo
      if (this.errors.any()) return;

      let changedAbility = {
        type: this.abilityType,
        newScore: this.abilityScore
      };
      // Commit the change
      this.updateAbility(changedAbility);
    },
    ...mapMutations("characterDetails", [
        "updateAbility"
      ]
    )
  },
  computed: {
    bonus() {
      const bonus = getAbilityBonus(this.abilityScore);
      if (bonus > 0) {
        return "+" + bonus.toString();
      } else {
        return bonus.toString();
      }
    }
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