<template>
  <div>
    <h2 class="text-center">{{name}}</h2>
    <v-layout justify-center>
      <v-flex xs2>
        <span>Character Class <strong>{{characterClass}}</strong></span>
      </v-flex>
      <v-flex xs2>
        <span>Level <strong>{{level}}</strong></span>
      </v-flex>
      <v-flex xs2>
        <span>Race <strong>{{race}}</strong></span>
      </v-flex>
    </v-layout>
  </div>

</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState('characterDetails', [
      'name',
      'level',
      'characterClass',
      'race'
    ])
  }
};
</script>

<style scoped>

</style>