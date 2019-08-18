<template>
  <div>
    <transition
      v-bind:name="slideTransition"
      mode="out-in"
    >
      <router-view ref="activeStep" :character="character">
        <div
          slot="navButtons"
          class="text-center nav-buttons"
        >
          <span>
            <v-btn
              type="button"
              v-show="showBack"
              @click="navigateStepBack"
              class="ma-2"
              color="secondary"
            >
              <v-icon
                left
                dark
              >arrow_left</v-icon>
              Back
            </v-btn>
            <v-btn
              type="button"
              v-show="showForward"
              @click="navigateStepForward"
              class="ma-2"
              color="success"
            >
              Continue
              <v-icon
                right
                dark
              >arrow_right</v-icon>
            </v-btn>
          </span>
        </div>
      </router-view>
    </transition>
  </div>
</template>

<script>
import CreateBasicInfo from "../components/create/CreateBasicInfo";
import CreateAbilityScores from "../components/create/CreateAbilityScores";
import ConfirmCreation from "../components/create/ConfirmCreation";
import { Character } from '../models/character';

export default {
  data() {
    return {
      slideTransition: "slide-left",
      showForward: true,
      showBack: false,
      currentStepNumber: 0,
      creationSteps: [CreateBasicInfo, CreateAbilityScores, ConfirmCreation],
      character: {}
    };
  },
  methods: {
    async navigateStepForward() {
      let currentStep = this.$refs.activeStep;
      let result = await currentStep.$validator.validateAll();

      if (result) {
        this.currentStepNumber++;
        this.showBack = true;
        this.slideTransition = "slide-left";
        if (this.currentStepNumber === this.creationSteps.length - 1) {
          this.showForward = false;
        }
        this.pushRoute();
      }
    },
    navigateStepBack() {
      this.currentStepNumber--;
      this.showForward = true;
      this.slideTransition = "slide-right";
      if (this.currentStepNumber === 0) {
        this.showBack = false;
      }
      this.pushRoute();
    },
    pushRoute() {
      let nextRoute = this.creationSteps[this.currentStepNumber];
      this.$router.push({ name: nextRoute.name });
    }
  },
  created() {
    this.character = new Character("","",1,"");
  }
};
</script>

<style>
.slide-left-enter {
  transform: translate(100%, 0);
}

.slide-left-leave-to {
  transform: translate(-100%, 0);
}

.slide-left-enter-active {
  transition: opacity 0.2s, transform 0.2s;
}

.slide-left-leave-active {
  transition: opacity 0.4s, transform 0.5s;
}

.slide-right-enter {
  transform: translate(-100%, 0);
}

.slide-right-leave-to {
  transform: translate(100%, 0);
}

.slide-right-enter-active {
  transition: opacity 0.2s, transform 0.2s;
}

.slide-right-leave-active {
  transition: opacity 0.4s, transform 0.5s;
}
</style>