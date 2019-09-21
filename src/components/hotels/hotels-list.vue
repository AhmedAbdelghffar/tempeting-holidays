<template>
  <div class="hotels-list">
    <div class="hotels-search-inline">
    </div>
    <v-container>
      <v-layout>
        <v-flex md2></v-flex>
        <v-flex md10>
          <div
            v-for="hotel in hotels"
          >
            <list-item :hotel="hotel"></list-item>
          </div>
          <v-pagination
            v-model="page"
            :length="totalPages"
          ></v-pagination>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import listItem from './list-item/hotels-list-item'
  export default {
    name: "list",
    components: {
      listItem
    },
    data() {
      return {
        hotels: [],
        page: 1,
        totalPages: 0
      }
    },
    mounted() {
      this.getHotels()
    },
    methods:{
      getHotels() {
        this.$store.dispatch('setLoader',true)
        this.$http.get(`properties/search?search_key=${this.$route.query.sid}&page=${this.page}`)
          .then(response=>{
            this.hotels = response.data.data.hotelbeds.data
            this.totalPages = response.data.data.hotelbeds.total
            this.$store.dispatch('setLoader',false)
          })
          .catch(error=> {
            this.$store.dispatch('setLoader',false)
          })
      }
    },
    watch: {
      page() {
        this.getHotels()
      }
    }
  }
</script>

<style scoped>

</style>