<template>
  <div>
    <v-layout justify-center>
      <v-flex xs2>
        <v-select
          label="Weapon"
          v-model="weapon"
          :items="availableWeapons"
          item-text="name"
          item-value="name"
          return-object
          >
        </v-select>
        DMG <strong>{{getDmg}}</strong>
      </v-flex>
        
      <v-flex xs2>
        <v-select
          label="Armor"
          v-model="armor"
          :items="availableArmors"
          item-text="name"
          item-value="name"
          return-object
          >
        </v-select>
        AC <strong>{{getAc}}</strong>
      </v-flex>
    </v-layout>
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