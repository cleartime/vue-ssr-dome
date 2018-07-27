import request from 'axios'

request.defaults.baseURL = 'https://gxx.leanapp.cn/'

export const setCategory = ({ commit, state }) => {
  return request.get('category').then((response) => {
    if (response.statusText === 'OK') {
      response.data.code == '200' && commit('SET_CATEGORY', response.data.data)
    }
  }).catch((error) => {
    console.log(error)
  })
}