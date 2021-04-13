import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    productInfo: []
  },
  actions: {
    getProductData ({ commit }) {
      console.log('2')
      axios.get('http://localhost:3000/product').then(res => {
        commit('productInfoInit', res.data)
      })
      console.log('2.2')
    }
  },
  mutations: {
    productInfoInit (state, payload) {
      console.log('3')
      // state.productInfo = payload
      const filterProductData = payload.map(item => Object.values(item)[2]).flat(Infinity)
      // const filterProductData = [].concat(...payload.map(item => Object.values(item)[2]))
      state.productInfo = filterProductData
      // console.log(filterProductData)
      console.log('3.2')
    }
  },
  getters: {
    productInfo (state) {
      return state.productInfo
    }
  }
})
