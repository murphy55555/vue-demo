<template>
  <div>
    <div class="row">
      <div class="col-sm-3">
        Weapon:
        <select v-model="weapon">
          <option v-for="availableWeapon in availableWeapons" :key="availableWeapon.name" :value="availableWeapon">{{availableWeapon.name}}</option>
        </select>
      </div>
      <div class="col-sm-2">
        DMG:
        <strong>{{getDmg}}</strong>
      </div>
      <div class="col-sm-3">
        Armor:
        <select v-model="armor">
          <option v-for="availableArmor in availableArmors" :key="availableArmor.name" :value="availableArmor">{{availableArmor.name}}</option>
        </select>
      </div>
      <div class="col-sm-1">
        AC:
        <strong>{{getAc}}</strong>
      </div>
    </div>
  </div>
</template>

<script>
import { getWeapons, getArmorTypes } from "@/services/character-service";
import { createNamespacedHelpers } from 'vuex';

const { mapMutations, mapGetters, mapState } = createNamespacedHelpers('characterDetails');

const getters = mapState([
  'weapon',
  'armor'
]);
const mutations = mapMutations([
  'updateWeapon',
  'updateArmor'
]);

export default {
  data() {
    return {
      availableWeapons: [],
      availableArmors: [],
    };
  },
  computed: {
    ...mapGetters([
      'getDmg',
      'getAc'
    ]),
    weapon: {
      get: getters.weapon,
      set: mutations.updateWeapon
    },
    armor: {
      get: getters.armor,
      set: mutations.updateArmor
    }
  },
  created() {
    this.availableWeapons = getWeapons();
    this.availableArmors = getArmorTypes();
  }
};
</script>

<style scoped>

</style>