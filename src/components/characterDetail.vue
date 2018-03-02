<template>
  <div>
    {{character.name}}
    <br>
    <ability :abilityType="abilityType" :score="abilityScore"></ability>
  </div>

</template>

<script>
import { CharacterService } from "@/services/character-service";
import Ability from "@/components/ability";
export default {
  components: {
    "ability": Ability
  },
  data() {
    return {
      character: {},
      abilityType: "Strength",
      abilityScore: 10
    };
  },
  created() {
      this.character = CharacterService.getCharacter(
      this.$route.params.characterName
    );
  }
};
</script>

<style scoped>

</style>