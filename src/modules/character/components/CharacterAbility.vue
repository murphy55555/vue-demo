<template>
  <v-card>
    <v-card-title>
      {{abilityType}}
    </v-card-title>
    <v-card-text>
    <v-slider
        :value="score"
        class="align-center"
        hide-details
        :min="0"
        :max="20"
        @input="abilityChanged"
      >
        <template #append>
          <v-text-field
            :value="score"
            class="mt-0 pt-0"
            hide-details
            single-line
            type="number"
            style="width: 40px"
            @input="abilityChanged"
          ></v-text-field>
        </template>
      </v-slider>
    <span>Bonus <strong>{{bonus}}</strong></span>
    </v-card-text>
  </v-card>
</template>

<script>
import { getAbilityBonus } from "../services/character-service";
import { mapMutations } from '../store';

export default {
  name: "ability",
  props: ["abilityType", "score"],
  methods: {
    abilityChanged(value) {
      let changedAbility = {
        type: this.abilityType,
        newScore: parseFloat(value) || value
      };
      this.updateAbility(changedAbility);
    },
    ...mapMutations([
        "updateAbility"
      ]
    )
  },
  computed: {
    bonus() {
      const bonus = getAbilityBonus(this.score);
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