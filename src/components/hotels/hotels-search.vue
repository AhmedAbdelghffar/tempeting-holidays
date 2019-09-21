<template>
  <div class="search-hotels">
    <v-form v-model="valid" ref="hotelsSearchForm" class="hotel-search">
      <v-layout row wrap>

        <v-flex xs4>
          <v-autocomplete
            :items="countries"
            label="Country"
            item-text="description.content"
            item-value="code"
            v-model="searchObject.country"
            @change="getDestinations"
            :rules="[v => !!v || 'Country is required']"
            outlined
            flat
          ></v-autocomplete>
        </v-flex>
        <v-flex xs4>
          <v-autocomplete
            label="Destination"
            :items="destinations"
            item-text="name.content"
            item-value="code"
            v-model="searchObject.destination"
            no-data-text="Please Select Country"
            @change="getZones"
            :rules="[v => !!v || 'Destination is required']"
            outlined
            flat
          ></v-autocomplete>
        </v-flex>
        <v-flex xs4>
          <v-autocomplete
            label="zone"
            :items="zones"
            item-text="name"
            item-value="zoneCode"
            v-model="searchObject.zone"
            no-data-text="Please Select Destination"
            outlined
            flat
          ></v-autocomplete>
        </v-flex>
        <v-flex xs6>
          <v-menu
            v-model="fromMenu"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            full-width
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="searchObject.date_start"
                label="From"
                append-icon="event"
                readonly
                v-on="on"
                outlined
                flat
              ></v-text-field>
            </template>
            <v-date-picker v-model="searchObject.date_start" :allowed-dates="allowFromDates" @input="inputFrom"></v-date-picker>
          </v-menu>
        </v-flex>
        <v-flex xs6>
          <v-menu
            v-model="toMenu"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            full-width
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="searchObject.date_end"
                label="To"
                append-icon="event"
                readonly
                v-on="on"
                outlined
                flat
              ></v-text-field>
            </template>
            <v-date-picker v-model="searchObject.date_end" :allowed-dates="allowToDates" @input="toMenu = false"></v-date-picker>
          </v-menu>
        </v-flex>
        <v-flex xs4>
          <v-autocomplete
            :items="categories"
            v-model="searchObject.category"
            label="category"
            item-text="name"
            item-value="value"
            outlined
            flat
          ></v-autocomplete>
        </v-flex>
        <v-flex xs4>
          <v-autocomplete
            :items="roomTypes"
            v-model="searchObject.room_type"
            label="Room Type"
            item-text="name"
            item-value="value"
            outlined
            flat
          ></v-autocomplete>
        </v-flex>
        <v-flex xs4>
          <v-autocomplete
            :items="sourceMarkets"
            v-model="searchObject.source_market"
            label="Nationality"
            item-text="name"
            item-value="value"
            outlined
            flat
          ></v-autocomplete>
        </v-flex>
        <v-flex xs3>
          <v-select
            :items="adultsList"
            v-model="searchObject.adults"
            label="Adults"
            item-text="name"
            item-value="value"
            outlined
            flat
          ></v-select>
        </v-flex>
        <v-flex xs3>
          <v-select
            :items="childrenList"
            v-model="searchObject.children"
            label="Children"
            item-text="name"
            item-value="value"
            outlined
            flat
          ></v-select>
        </v-flex>
        <v-flex xs12 v-if="searchObject.children > 0">
          <v-layout class="ma-0" row wrap>
            <v-flex xs12>
              <label>Age at check-out</label>
            </v-flex>
            <v-flex
              xs2
              class="pa-0"
              v-for="index in searchObject.children" :key="index"
            >
              <v-select
                :items="childrenList"
                v-model="searchObject.ages[index]"
                item-text="name"
                item-value="value"
                outlined
                flat
              ></v-select>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12 class="text-right">
          <v-btn @click="searchHotels" color="secondary">
            Search
          </v-btn>
        </v-flex>
      </v-layout>
    </v-form>
  </div>
</template>

<script>
  import _ from 'lodash'
  import common from '../../utils/common'
  export default {
    name: "search",
    data () {
      return {
        fromMenu: false,
        toMenu: false,
        countries: [],
        destinations: [],
        roomTypes: [],
        sourceMarkets: [],
        zones:[],
        adultsList:[
          {name: '+1', value: 1},
          {name: '+2', value: 2},
          {name: '+3', value: 3},
          {name: '+4', value: 4},
          {name: '+5', value: 5},
          {name: '+6', value: 6},
          {name: '+7', value: 7},
          {name: '+8', value: 8},
          {name: '+9', value: 9},
          {name: '+10', value: 10},
        ],
        childrenList: [
          {name: '0', value: 0},
          {name: '1', value: 1},
          {name: '2', value: 2},
          {name: '3', value: 3},
          {name: '4', value: 4},
          {name: '5', value: 5},
          {name: '6', value: 6},
          {name: '7', value: 7},
          {name: '8', value: 8},
          {name: '9', value: 9},
          {name: '10', value: 10},
        ],
        categories: [
          {name: 'All', value: 'all'},
          {name: '*' , value: 1},
          {name: '**' , value: 2},
          {name: '***' , value: 3},
          {name: '****' , value: 4},
          {name: '*****' , value: 5},
          {name: '******' , value: 6}
        ],
        valid: false,
        searchObject: {
          country: '',
          destination: '',
          zone: '',
          date_start: '',
          date_end:  '',
          adults: 1,
          children: 0,
          ages: [],
          category: "all",
          room_type: "all",
          source_market: "all"
        }
      }
    },
    mounted () {
      this.getCountries()
      this.getPredData()
      this.searchObject.date_start = new Date().getFullYear()+'-'+("0"+(new Date().getMonth()+1)).slice(-2)+'-'+("0"+(new Date().getDate())).slice(-2)
      this.searchObject.date_end =new Date().getFullYear()+'-'+("0"+(new Date().getMonth()+1)).slice(-2)+'-'+("0"+(new Date().getDate()+2)).slice(-2)
    },
    methods: {
      getCountries() {
        this.$http_noauth.get('/locations/countries')
          .then(response=>{
            this.countries = response.data.countries
          })
          .catch(error=>{

          })
      },
      getDestinations() {
        this.$store.dispatch('setLoader',true)
        this.destinations = []
        this.searchObject.zone = ''
        this.$http_noauth.get(`/locations/countries/${this.searchObject.country}/destinations`)
          .then(response=> {
            this.destinations = response.data.destinations
            this.$store.dispatch('setLoader',false)
          })
          .catch(error=>{
            this.$store.dispatch('setLoader',false)
          })
      },
      getZones() {
        this.zones = []
        let destinationIndex = _.findIndex(this.destinations, o=> {
          return o.code === this.searchObject.destination
        })
        if (destinationIndex !== -1) {
          this.zones = this.destinations[destinationIndex].zones
        }
        this.searchObject.zone = 'all'
        this.zones.unshift({name: 'All', zoneCode: 'all'})
      },
      getPredData () {
        this.$http_noauth('/pre-search/data')
          .then(response=> {
            this.roomTypes = response.data.roomTypes
            this.roomTypes.unshift({name:'All', value: 'all'})
            this.sourceMarkets = response.data.sourceMarkets
            this.sourceMarkets.unshift({value:'all', name: 'All'})
          })
          .catch(error=>{

          })
      },
      inputFrom() {
        this.fromMenu = false
        this.toMenu = true
      },
      allowToDates (val) {
        return val > this.searchObject.date_start
      },
      allowFromDates (val) {
        return new Date(val) >= new Date()
      },
      searchHotels() {
        if (this.$refs.hotelsSearchForm.validate()) {
          this.$store.dispatch('setLoader',true)
          this.$http.post('/properties/search',this.searchObject)
            .then(response=>{
              this.$store.dispatch('setLoader',false)
              this.$router.push({ path: 'hotels', query: { sid: response.data.data.search_key,} , params: { searchObject: this.searchObject }})
            })
            .catch(error=>{
              console.log('error')
              this.$store.dispatch('setLoader',false)
            })
        }
      }
    },
    watch: {
      'searchObject.children': function(state) {
        let agesList = this.searchObject.ages
        this.searchObject.ages = []
        for (let i= 0; i < state ; i++) {
          if (agesList[i]) {
            this.searchObject.ages.push(agesList[i])
          }else {
            this.searchObject.ages[i] = 0
          }
        }
        console.log(this.searchObject)
      }
    }
  }
</script>

<style scoped>

</style>