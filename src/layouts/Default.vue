<template>
  <div>
    <header-tool-bar @toggleDrawer="drawer = !drawer"></header-tool-bar>
    <!--<sidebar :drawer="drawer"/>-->
    <v-content class="">
      <slot />
    </v-content>
    <footer-app></footer-app>
    <loader></loader>
  </div>
</template>

<script>
    import sidebar from '../components/common/sidebar'
    import headerToolBar from '../components/common/headerToolBar'
    import footerApp from '../components/common/app-footer'
    import loader from '../components/common/loader'
    export default {
        name: "Default",
        components: {
          loader,
          sidebar,
          headerToolBar,
          footerApp
        },
        data () {
          return {
            drawer: true
          }
        }
    }
</script>

<style scoped>

</style>