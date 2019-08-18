<template>
  <v-row
    align="center"
    justify="center"
  >
    <v-col
      cols="12"
      sm="8"
      md="4"
    >
    <v-alert
      v-if="loggedIn"
      type="info"
      border="bottom"
      colored-border>
      You are already logged in! <br />
      <router-link :to="{ name: 'characterSearch' }">Return to Character Search</router-link>
    </v-alert>
    <form v-else @submit.prevent="formSubmitted">
      <v-card class="elevation-12">
        <v-toolbar
          color="primary"
          dark
          flat
        >
          <v-toolbar-title>Login form</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn
                href="#"
                icon
                large
                target="_blank"
                v-on="on"
              >
                <v-icon>mdi-code-tags</v-icon>
              </v-btn>
            </template>
            <span>Source</span>
          </v-tooltip>
          <v-tooltip right>
            <template v-slot:activator="{ on }">
              <v-btn
                icon
                large
                href="https://codepen.io/johnjleider/pen/pMvGQO"
                target="_blank"
                v-on="on"
              >
                <v-icon>mdi-codepen</v-icon>
              </v-btn>
            </template>
            <span>Codepen</span>
          </v-tooltip>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field
              label="Login"
              name="login"
              prepend-icon="person"
              type="text"
              v-model="username"
            ></v-text-field>

            <v-text-field
              id="password"
              label="Password"
              name="password"
              prepend-icon="lock"
              type="password"
              v-model="password"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" type="submit">Login</v-btn>
        </v-card-actions>
      </v-card>
      </form>
    </v-col>
  </v-row>
</template>
<script>
import { mapActions, mapState } from "../store";

export default {
  data: () => ({
    username: "",
    password: ""
  }),
  methods: {
    formSubmitted() {
      this.attemptLogin({
        username: this.username,
        password: this.password
      });
    },
    ...mapActions(["attemptLogin", "clearError"])
  },
  computed: {
    ...mapState(["errorMessage", "loggedIn"])
  },
  watch: {
    username() {
      this.clearError();
    },
    password() {
      this.clearError();
    }
  }
};
</script>