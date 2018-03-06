<template>
  <div>
    <div class="row">
      <div class="col-sm-12">
        <span class="h3">{{character.name}}</span>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-4">
        <span>Character Class: <strong>{{character.characterClass}}</strong></span>
      </div>
      <div class="col-sm-4">
        <span>Level: <strong>{{character.level}}</strong></span>
      </div>
      <div class="col-sm-4">
        <span>Race: <strong>{{character.race}}</strong></span>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props:[
    "character"
  ],
  data() {
    return {};
  },
  created() {}
};
</script>

<style scoped>

</style>