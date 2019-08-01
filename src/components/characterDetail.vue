<template>
  <div>
    <div class="row">
      <div class="col-sm-6">
        Component Legend:<br>
        <table class="table table-bordered table-condensed">
          <thead>
            <tr>
              <th>Component</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>characterDetail.vue</td>
              <td>white</td>
            </tr>
            <tr>
              <td>characterBasicInfo.vue</td>
              <td class="background-green">aquamarine</td>
            </tr>
            <tr>
              <td>characterStats.vue</td>
              <td class="background-grey">lightgrey</td>
            </tr>
            <tr>
              <td>characterAbilities.vue</td>
              <td class="background-brown">wheat</td>
            </tr>
            <tr>
              <td>ability.vue</td>
              <td class="background-blue">paleturquoise</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <br> <br>
    <div class="row">
      <div class="col-sm-12">
        <CharacterBasicInfo class="background-green"></CharacterBasicInfo>
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col-sm-12">
        <CharacterStats class="background-grey"></CharacterStats>
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col-sm-12">
        <CharacterAbilities class="background-brown"></CharacterAbilities>
      </div>
    </div>
  </div>
</template>

<script>
import CharacterAbilities from "@/components/characterAbilities";
import CharacterBasicInfo from "@/components/characterBasicInfo";
import CharacterStats from "@/components/characterStats";
import { mapActions } from 'vuex';

export default {
  components: {
    CharacterBasicInfo,
    CharacterStats,
    CharacterAbilities
  },
  methods: {
    ...mapActions('characterDetails', [
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
.background-green {
  background-color: aquamarine;
  border: 2px solid;
  padding: 10px;
}
.background-grey {
  background-color: lightgrey;
  border: 2px solid;
  padding: 10px;
}
.background-brown {
  background-color: wheat;
  border: 2px solid;
  padding: 10px;
}
.background-blue {
  background-color: paleturquoise;
}
</style>