https://github.com/ffxsam/vue-typescript-cookbook#when-i-use-an-array-prop-type-my-components-properties-data-computed-properties-etc-are-shown-as-type-errors
https://typescript.nuxtjs.org/cookbook/store.html#vanilla

# Типизировать поступающее из стора напрямую - невозможно. (!)

# Декларация Store, store/index.ts.

import Vue from 'vue'
import Vuex, {StoreOptions, MutationTree, ActionTree, GetterTree, ModuleTree, Plugin, Getter, Action, Mutation, Module} from 'vuex'
//источник Vuex-интерфейсов - /node_modules/vuex/types/index.d.ts
import MySubModule from '@/store/submodule'


Vue.use(Vuex)

type RootState = ReturnType<typeof state>
или
interface TodoItem {
  id: number
  text: string
  done: boolean
}
interface RootState {
  items: TodoItem[]
}

const state: RootState = () => ({
  things: [] as string[],
  name: 'Me',
})

const getters: GetterTree<RootState, RootState> = {
  name: state => state.name,
}

const mutations: MutationTree<RootState> = {
  CHANGE_NAME: (state, newName: string) => state.name = newName,
}

const actions: ActionTree<RootState, RootState> = {
  fetchThings({ commit }): void {
    const things = this.$axios.$get('/things')
    console.log(things)
    commit('CHANGE_NAME', 'New name')
  },
  add({commit, state}, text: string): void {
    commit('add', text)
  }
}

export default new Vuex.Store<RootState>({
  state,
  mutations,
  actions,
  getters,
  modules: {
    subModuleName: MySubModule,
    //other submodules
  }
})





# Тоже самое, но для модульного стора, /store/submodule.ts

import {Module, GetterTree, MutationTree, ActionTree } from "vuex"
import { RootState } from '~/store'

class ProfileState {                 //здесь- это интерфейс для state.
  userId: string | null = null;
}


const getters: GetterTree<ProfileState, RootState> = {
  nameAndMore: (state, getters, rootState) => rootState.name,
}

const actions: ActionTree<ProfileState, RootState> = {
  printRootState({ rootState }) {
    console.log(rootState.name)
  },
}

const namespaced: boolean = true;
const MySubModule: Module<ProfileState, RootState> = {
  namespaced,
  state: new ProfileState(),      //в роли тапа используем class
  mutations,
  actions
}

export default MySubModule