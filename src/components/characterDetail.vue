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
        <character-basic-info :character="character" class="background-green"></character-basic-info>
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col-sm-12">
        <character-stats class="background-grey"></character-stats>
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col-sm-12">
        <character-abilities :abilities="character.abilities" class="background-brown"></character-abilities>
      </div>
    </div>
  </div>
</template>

<script>
import { CharacterService } from "@/services/character-service";
import CharacterAbilities from "@/components/characterAbilities";
import CharacterBasicInfo from "@/components/characterBasicInfo";
import CharacterStats from "@/components/characterStats";
export default {
  components: {
    "character-basic-info": CharacterBasicInfo,
    "character-stats": CharacterStats,
    "character-abilities": CharacterAbilities
  },
  data() {
    return {
      character: {}
    };
  },
  created() {
    let characterName = this.$route.params.characterName;

    this.$store
      .dispatch("loadCharacter", { characterName })
      .then(c => (this.character = c));
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