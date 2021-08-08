import Vue from 'vue'
import Vuex from 'vuex'
import {MutationTree, ActionTree, GetterTree} from 'vuex'
import {RootState, Product} from '@/types';

import axios from "axios";

Vue.use(Vuex)

const state = () => ({
    laptops: [],
    mouses: [],
    accessories: [],
    clientBasket: []
}) as RootState

const getters = {
    GET_PRODUCTS: (state: RootState): Product[] => state.laptops,
    GET_PRODUCT: (state: RootState) => (id: number): Product => {
        let productIndex = state.laptops.findIndex(item => item._id === id)
        return state.laptops[productIndex]
    },
} as GetterTree<RootState, {}>  //вариант №1

const mutations: MutationTree<RootState> = {  //вариант №2
    CHANGE_NAME: (state, newDescription: string) => state.laptops[0].description = newDescription,
    PUT_PRODUCT_TO_BASKET(state: RootState, id: number) {
        if (id > 0)   // добавляем
            state.clientBasket.push(id)
        if (id < 0) {  //удаляем 1 экземпляр из корзины
            let deletedProductIndex = state.clientBasket.findIndex(itemId => itemId === Math.abs(id))
            Vue.delete(state.clientBasket, deletedProductIndex)
        }
    },
}

const actions = {
    fetchThings({commit}): void {
        const things = axios.get('/things')
        console.log(things)
        commit('CHANGE_NAME', 'New name')
    },
    add({commit, state}, text: string): void {
        commit('add', text)
    }
} as ActionTree<RootState, {}>

export default new Vuex.Store<RootState>({
    state,
    getters,
    mutations,
    actions,
    modules: {}
})

//
export interface Product {
    "shelf": string,
    "_id"?: any,
    "name": string,
    "description": string,
    "manufactureNotes": ManufactureNotes,
    "specification": Specification,
    "additionalInformation": AdditionalInformation
}

interface ManufactureNotes {
    "sectionName": string,
    "country": string,
    "release": string,
    "warranty": string,
}

interface Specification {
    "sectionName": string,
    "color": string,
    "mass": string,
    "processor"?: string,
    "screenSize"?: string,
}

interface AdditionalInformation {
    "sectionName": string,
    "delay": string
}


export interface RootState {
    laptops: Product[],
    mouses: Product[],
    accessories: Product[],
    clientBasket: number[]
}



