import store from '../store/index'
export default class lsSync {
  static syncData () {
    const userToken = localStorage.getItem('userToken')
    store.dispatch('setUserToken', userToken)
  }
}