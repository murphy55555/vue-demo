<template>
  <div>
    <div class="row">
      <div class="col-sm-12">
        <span class="h3">{{name}}</span>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-4">
        <span>Character Class: <strong>{{characterClass}}</strong></span>
      </div>
      <div class="col-sm-4">
        <span>Level: <strong>{{level}}</strong></span>
      </div>
      <div class="col-sm-4">
        <span>Race: <strong>{{race}}</strong></span>
      </div>
    </div>
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