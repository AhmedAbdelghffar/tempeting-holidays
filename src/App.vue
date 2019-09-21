<template>
  <v-app>
    <component :is="layout">
      <transition name="slide" mode="out-in">
      <router-view/>
      </transition>
    </component>
  </v-app>
</template>

<script>
const default_layout = 'default'
export default {
  name: 'App',
  data () {
    return {
      //
    }
  },
  computed: {
    layout() {
      return this.$route.meta.layout+ '-layout'
    }
  }
}
</script>

<style lang="scss">
  @import "css/layout.scss";
  @import "css/search-form.scss";
  @import "css/hotels/hotels-list.scss";
  @import "css/fonts";
  .slide-enter-active{
    animation: slide-in 500ms ease-out forwards;
  }

  .slide-leave-active{
    animation: slide-out 500ms ease-out forwards;
  }
  @keyframes slide-in {
    from{
      transform: translateY(-30px);
      opacity:0;
    }
    to{
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-30px);
      opacity: 0;
    }
  }
</style>
