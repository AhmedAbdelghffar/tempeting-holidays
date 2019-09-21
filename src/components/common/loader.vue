<template>
  <v-overlay :value="loader">
    <v-progress-circular indeterminate size="64"></v-progress-circular>
  </v-overlay>
</template>

<script>
  export default {
    name: "loader",
    data() {
      return {

      }
    },
    computed: {
      loader() {
        return this.$store.state.helpers.loader
      }
    }
  }
</script>

<style scoped>

</style>