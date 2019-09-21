<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar color="primary">
                <v-toolbar-title class="white--text">Login form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" v-model="username" name="login" label="Login" type="text"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" v-model="password" name="password" label="Password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="login" color="primary">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      username: '',
      password: ''
    }),
    methods: {
      login () {
        const store = this.$store
        this.$http_noauth.post('/auth/login', {
          email: this.username,
          password: this.password
        })
                .then(response => {
                  store.dispatch('setUserToken', response.data.data.api_key)
                  store.dispatch('setUserData',response.data.data.user )
                  localStorage.setItem('userToken', response.data.data.api_key)
                  localStorage.setItem('userData', JSON.stringify(response.data.data.user ))
                  window.location.href = "/"
                })
                .catch(error => {
                  console.log(error);
                });
      }
    }
  }
</script>
<style>
  .v-toolbar:not(.v-toolbar--fixed) .v-toolbar__content {
    margin-left: 0px;
  }
</style>