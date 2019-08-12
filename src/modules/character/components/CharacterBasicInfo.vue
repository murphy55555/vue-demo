<template>
  <div>
    <div class="text-center headline">{{name}}</div>
    <div class="text-center subtitle-1">
      <span>Level <strong>{{level}} {{race}} {{characterClass}}</strong></span>
    </div>
  </div>

</template>

<script>
import { mapState } from '../store';

export default {
  computed: {
    ...mapState([
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