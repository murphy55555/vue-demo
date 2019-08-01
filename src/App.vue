<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetiful D&amp;D</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container grid-list-xl>
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
