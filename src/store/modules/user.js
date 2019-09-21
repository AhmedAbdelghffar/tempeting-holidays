export const user = {
  state: {
    userToken: '',
  },
  mutations: {
    'SET_USER_TOKEN' (state , token){
      state.userToken = token
    }
  },
  actions: {
    setUserToken({commit},token){
      commit('SET_USER_TOKEN',token)
    }
  }
}
