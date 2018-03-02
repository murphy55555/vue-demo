<template>
  <div>
    <div class="abilityBox">
      {{abilityType}}
      <br>
      <input type='number' class="abilityValue" v-model="abilityScore" v-on:change="calculateBonus">
      <br>
      <span>Bonus:{{bonus}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:"ability",
  props:[
    "abilityType",
    "score"
  ],
  data: function() {
    return {
      bonus: "+3",
      abilityScore: this.score
    };
  },
  methods:{
    calculateBonus() {
      if(this.abilityScore <= 5){
        this.bonus = "-1";
      }else if(this.abilityScore > 5 && this.abilityScore <= 10){
        this.bonus = "0";
      }else if(this.abilityScore > 10 && this.abilityScore <= 15){
        this.bonus = "+1";
      }else{
        this.bonus = "+2";
      }

      this.$emit('score-changed', 
      { 
        abilityType: this.abilityType, 
        newScore: this.abilityScore 
      });
    }
  },
  created() {
    this.calculateBonus();
  }
};
</script>

<style>
abilityBox {
  border: 2px solid;
  padding: 4px;
  height: 100px;
  width: 120px;
}

abilityValue {
  width: 100%;
}
</style>