<template>
  <div>
    <h3>Component Legend</h3>
    <v-layout>
      <v-flex>
        <table>
          <thead>
            <tr>
              <th>Component</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CharacterDetail.vue</td>
              <td>white</td>
            </tr>
            <tr>
              <td>CharacterBasicInfo.vue</td>
              <td class="calledout-component background-green">aquamarine</td>
            </tr>
            <tr>
              <td>CharacterStats.vue</td>
              <td class="calledout-component background-grey">lightgrey</td>
            </tr>
            <tr>
              <td>CharacterAbilities.vue</td>
              <td class="calledout-component background-brown">wheat</td>
            </tr>
            <tr>
              <td>CharacterAbility.vue</td>
              <td class="calledout-component background-blue">paleturquoise</td>
            </tr>
          </tbody>
        </table>
      </v-flex>
    </v-layout>
    <br>
    <CharacterBasicInfo class="calledout-component background-green"></CharacterBasicInfo>
    <CharacterStats class="calledout-component background-grey"></CharacterStats>
    <CharacterAbilities class="calledout-component background-brown"></CharacterAbilities>
  </div>
</template>

<script>
import CharacterAbilities from "../components/CharacterAbilities";
import CharacterBasicInfo from "../components/CharacterBasicInfo";
import CharacterStats from "../components/CharacterStats";
import { mapActions } from '../store';

export default {
  components: {
    CharacterBasicInfo,
    CharacterStats,
    CharacterAbilities
  },
  methods: {
    ...mapActions([
        'loadCharacter'
    ])
  },
  created() {
    const characterName = this.$route.params.characterName;
    this.loadCharacter({ characterName });
  }
};
</script>

<style>
.calledout-component {
  border: 2px solid;
  padding: 10px;
  margin: 2px;
}
.background-green {
  background-color: aquamarine;
}
.background-grey {
  background-color: lightgrey;
}
.background-brown {
  background-color: wheat;
}
.background-blue {
  background-color: paleturquoise !important;
}
</style>