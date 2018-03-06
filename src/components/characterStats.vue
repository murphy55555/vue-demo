<template>
  <div>
    <div class="row">
      <div class="col-sm-3">
        Weapon:
        <select v-model="selectedWeapon" v-on:change="updateWeapon">
          <option v-for="weapon in availableWeapons" v-bind:value="weapon" v-bind:key="weapon.name">{{weapon.name}}</option>
        </select>
      </div>
      <div class="col-sm-2">
        DMG:
        <strong>{{character.DMG}}</strong>
      </div>
      <div class="col-sm-3">
        Armor:
        <select v-model="selectedArmor" v-on:change="updateArmor">
          <option v-for="armor in availableArmor" v-bind:key="armor.name" v-bind:value="armor">{{armor.name}}</option>
        </select>
      </div>
      <div class="col-sm-1">
        AC:
        <strong>{{character.AC}}</strong>
      </div>
    </div>
  </div>
</template>

<script>
import { CharacterService } from "@/services/character-service";
export default {
  data() {
    return {
      selectedWeapon: "",
      availableWeapons: [],
      selectedArmor: "",
      availableArmor: [],
      character: {}
    };
  },
  methods: {
    updateWeapon() {
      this.$store.commit("updateWeapon", this.selectedWeapon);
    },
    updateArmor() {
      this.$store.commit("updateArmor", this.selectedArmor);
    }
  },
  created() {
    this.character = this.$store.state.currentCharacter;
    this.availableWeapons = CharacterService.getWeapons();
    this.availableArmor = CharacterService.getArmorTypes();
    this.selectedWeapon = this.character.Weapon;
    this.selectedArmor = this.character.Armor;
  }
};
</script>

<style scoped>

</style>