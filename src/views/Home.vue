<template>
  <div class="page-home page">
    <div class="home-search-section section" style="background-image: url('http://booking.s-plus.me/img/background.jpeg')">
      <v-container >
        <search></search>
      </v-container>
    </div>
  </div>
</template>

<script>
  import search from '../components/hotels/hotels-search'
export default {
  components: {
    search
  },
  data () {
    return {
      searchBg: require('../assets/search-bg.jpg')
    }
  }
};
</script>
