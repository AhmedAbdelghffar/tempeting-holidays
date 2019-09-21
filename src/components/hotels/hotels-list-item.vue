<template>
  <div class="hotel-card">
    <v-layout row wrap class="ma-0">
      <v-flex md3>
        <img :src="`http://photos.hotelbeds.com/giata/bigger/${hotel.images[0].path}`" class="feature-img" alt="">
      </v-flex>
      <v-flex md6>
        <div class="hotel-card-descreption">
          <v-layout row nowrap class="align-center mb-2">
            <a class="title mr-2">{{hotel.name.content}}</a>
            <v-rating v-if="hotel.category.description" :value="getRating(hotel.category.description.content)" small color="#E39524" class="mr-2"></v-rating>
            <p class="mb-0" v-if="hotel.chain">{{hotel.chain.description.content}}</p>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs12>
              <p>{{hotel.address.content}}</p>
            </v-flex>
            <v-flex xs12>
              <p v-if="mailFacilities.wifi !== -1" class="mb-1 d-flex align-center"><v-icon class="mr-2" small color="secondary">mdi-wifi</v-icon> Wi-Fi</p>
              <p v-if="mailFacilities.reception24 !== -1" class="mb-1 d-flex align-center"><v-icon class="mr-2" small color="secondary">mdi-clock-check-outline</v-icon> 24-hour reception</p>
              <p v-if="mailFacilities.carPark !== -1" class="mb-1 d-flex align-center"><v-icon class="mr-2" small color="secondary">mdi-garage</v-icon> Car park</p>
            </v-flex>
          </v-layout>
        </div>
      </v-flex>
      <v-flex xs3>
        <div class="hotel-card-price">
          <a class="font-weight-bold">{{hotel.roomsRate[0].name}}</a>
          <p class="title d-block text-right min-rate">{{hotel.roomsRate[0].rates[0].net}} <v-icon color="#333">mdi-currency-eur</v-icon></p>
          <v-btn block color="secondary">Book</v-btn>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  export default {
    name: "hotels-list-item",
    props: {
      hotel: {
        type: Object,
        default: ()=> {
          return {}
        }
      }
    },
    data(){
      return {
        mailFacilities: {
          wifi: -1,
          reception24: -1,
          carPark: -1
        }
      }
    },
    mounted() {
      this.formatFacilities()
    },
    methods: {
      getRating(rate) {
        return parseInt(rate.charAt(0))
      },
      formatFacilities() {
        this.mailFacilities.wifi = _.findIndex(this.hotel.facilities[1], o=>{
          return o.description.content === 'Wi-fi' && o.indYesOrNo
        })
        this.mailFacilities.reception24 = _.findIndex(this.hotel.facilities[1], o=>{
          return o.description.content === '24-hour reception' && o.indYesOrNo
        })
        this.mailFacilities.carPark = _.findIndex(this.hotel.facilities[1], o=>{
          return o.description.content === 'Car park' && o.indYesOrNo
        })
      }
    }
  }
</script>

<style scoped>

</style>