import Vue from 'vue'
import axios from 'axios'
import store from '../store/index'

let apiBaseUrl = process.env.VUE_APP_BASE_URL

// Vue.prototype.$http = axios

Vue.prototype.$http_noauth = axios.create({
  baseURL: apiBaseUrl,
  headers: {

  }
})

const userToken = localStorage.getItem('userToken')

Vue.prototype.$http = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    'Authorization' : `Bearer ${userToken}`
  }
})

