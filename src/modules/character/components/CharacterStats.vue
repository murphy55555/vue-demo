<template>
  <div>
    <v-layout justify-center>
      <v-flex xl2 lg3 md3 sm4 xs6>
        <v-card>
          <v-card-text>
            Damage
            <div class="title text--primary">{{getDmg}}</div>
            <v-select
              label="Weapon"
              v-model="weapon"
              :items="availableWeapons"
              item-text="name"
              item-value="name"
              return-object
              >
            </v-select>
          </v-card-text>
        </v-card>
      </v-flex>
        
      <v-flex xl2 lg3 md3 sm4 xs6>
        <v-card>
          <v-card-text>
            Armor Class
            <div class="title text--primary">{{getAc}}</div>
            <v-select
              label="Armor"
              v-model="armor"
              :items="availableArmors"
              item-text="name"
              item-value="name"
              return-object
              >
            </v-select>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { getWeapons, getArmorTypes } from "../services/character-service";
import { mapMutations, mapGetters, mapState } from '../store';

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