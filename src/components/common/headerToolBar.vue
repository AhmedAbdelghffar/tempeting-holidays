<template>
    <v-toolbar id="main-header"  color="white">
        <v-icon @click="toggleDrawer">menu</v-icon>

        <v-toolbar-title class="white--text">
            <v-img :width="200" src="http://booking.s-plus.me/img/logo.jpeg"></v-img>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
            <v-icon>search</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>apps</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>refresh</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>more_vert</v-icon>
        </v-btn>
    </v-toolbar>
</template>

<script>
  export default {
    methods: {
      toggleDrawer () {
        this.$emit('toggleDrawer')
      }
    }
  }
</script>

<style scoped>
    #main-header {
        z-index: 100;
    }
</style>