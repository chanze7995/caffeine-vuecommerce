import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    productInfo: []
  },
  actions: {
    getProductData ({ commit }) {
      axios.get('http://localhost:3000/product').then(res => {
        commit('productInfoInit', res.data)
      })
    }
    // setClickedCoffeeId({commit}){
    //   commit('')
    // }
  },
  mutations: {
    productInfoInit (state, payload) {
      // state.productInfo = payload
      const filterProductData = payload.map(item => Object.values(item)[2]).flat(Infinity)
      // const filterProductData = [].concat(...payload.map(item => Object.values(item)[2]))
      state.productInfo = filterProductData
      // console.log(filterProductData)
    }
    // clickedCoffeeId ()
  },
  getters: {
    allProductInfo (state) {
      return state.productInfo
    },
    allCoffeeBeanInfo (state) {
      return state.productInfo.filter(item => item.mainGroupName === 'coffeeBean')
    }
  }
})
