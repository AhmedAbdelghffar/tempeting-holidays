import Vue from 'vue'
import vuetify from './plugins/vuetify'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'

// sync localstorage with store
import lsSync from './utils/lsSync'

// global compponents
import Default from './layouts/Default'
import NoSidebar from './layouts/NoSidebar'
import i18n from './i18n'

Vue.config.productionTip = false
lsSync.syncData()

Vue.component('default-layout', Default)
Vue.component('no-sidebar-layout', NoSidebar)

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
