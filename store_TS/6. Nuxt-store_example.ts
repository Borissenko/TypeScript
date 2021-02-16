import Vue from 'vue'
import {MutationTree, ActionTree, GetterTree} from 'vuex'
// import {RootState, Product} from '~/types';
import {data} from '~/assets/API_data/data.js'

export interface Product {
  id: number,
  name: string,
  description: string,
  price: string,
  img: string,
  specification: Specification
}
interface Specification {
  guarantee: number
  release: number
  color: string
  screenDiagonal: number
}
export interface RootState {
  products: Product[],
  clientBasket: number[]
}
//

export const state = () => ({
  products: [],
  clientBasket: []
}) as RootState

export const getters = {
  GET_PRODUCTS: (state: RootState): Product[] => state.products,
  GET_PRODUCT: (state: RootState) => (id: number): Product => {
    let productIndex = state.products.findIndex(item => item.id === id)
    return state.products[productIndex]
  },
  GET_BASKET_PRODUCTS: (state: RootState): Product[] => {
    let basketProduct = [] as Product[]
    for (let id of state.clientBasket) {
      let item = state.products.find(item => item.id === id)
      if (item != null)
        basketProduct.push(item)
    }
    return basketProduct
  },
  GET_PRODUCT_AMOUNT: (state: RootState) => (id:number) => state.clientBasket.filter(itemId => itemId === id).length
} as GetterTree<RootState, {}>

export const mutations = {
  SET_PRODUCTS(state: RootState, products: Product[]) {
    state.products = products
  },
  PUT_PRODUCT_TO_BASKET(state: RootState, id: number) {
    if (id > 0)
      state.clientBasket.push(id)
    if (id < 0) {  //удаляем 1 экземпляр из корзины
      let deletedProductIndex = state.clientBasket.findIndex(itemId => itemId === Math.abs(id))
      Vue.delete(state.clientBasket, deletedProductIndex)
    }
  },
  CLEAR_BASKET(state: RootState) {
    console.log('CLEAR_BASKET ===')
    state.clientBasket = []
  },
} as MutationTree<RootState>

export const actions = {
  async nuxtServerInit({commit}: any, {$axios}: any) {
    await $axios.$get('./data.json')  //stateless-запросы работать перестали. Но по img - работают!! ))
      .then(
        (response: any) => {
          // commit('SET_PRODUCTS', response)
        },
        (error: any) => console.log()
      )
    commit('SET_PRODUCTS', data)
  }
} as ActionTree<RootState, {}>





