<template>
  <div>
    <v-alert
      v-if="loggedIn"
      type="info"
      border="bottom"
      colored-border>
      You are already logged in! <br />
      <router-link :to="{ name: 'characterSearch' }">Return to Character Search</router-link>
    </v-alert>
    <form v-else @submit.prevent="formSubmitted">
      <v-layout justify-center wrap>
        <v-flex xl2 lg3 md3 sm4 xs5>
          <v-text-field
            v-model="username"
            label="Username"
          ></v-text-field>
        </v-flex>
        <v-flex xl2 lg3 md3 sm4 xs5>
          <v-text-field
            v-model="password"
            label="Password"
            type="password"
          ></v-text-field>
        </v-flex>\
        <v-flex shrink>
          <v-btn
            color="primary"
            type="submit">
            Log In
          </v-btn>
        </v-flex>
        <v-flex xs12 v-if="errorMessage">
          <v-alert type="error">
            {{errorMessage}}
          </v-alert>
        </v-flex>
      </v-layout>
    </form>
  </div>
</template>
<script>
import { mapActions, mapState } from '../store';

export default {
  data: () => ({
    username: '',
    password: ''
  }),
  methods: {
    formSubmitted() {
      this.attemptLogin({
        username: this.username,
        password: this.password
      });
    },
    ...mapActions([
      'attemptLogin',
      'clearError'
    ])
  },
  computed: {
    ...mapState([
      'errorMessage',
      'loggedIn'
    ])
  },
  watch: {
    username() {
      this.clearError();
    },
    password() {
      this.clearError();
    }
  }
}
</script>


