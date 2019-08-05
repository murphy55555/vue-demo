<template>
  <v-card>
    <v-card-title>
      {{abilityType}}
    </v-card-title>
    <v-slider
        v-model.number="abilityScore"
        class="align-center"
        hide-details
        :min="0"
        :max="20"
      >
        <template #append>
          <v-text-field
            v-model.number="abilityScore"
            class="mt-0 pt-0"
            hide-details
            single-line
            type="number"
            style="width: 40px"
          ></v-text-field>
        </template>
      </v-slider>
    <span>Bonus <strong>{{bonus}}</strong></span>
  </v-card>
</template>

<script>
import { getAbilityBonus } from "../services/character-service";
import { mapMutations } from '../store';

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
    ...mapMutations([
        "updateAbility"
      ]
    )
  },
  watch: {
    abilityScore() {
      this.abilityChanged();
    }
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
</style>