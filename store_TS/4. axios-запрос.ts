import {ActionTree} from 'vuex';
import axios from 'axios';
import {ProfileState, User} from './types';
import {RootState} from '../types';

export const actions: ActionTree<ProfileState, RootState> = {
  async fetchData({commit}): any {
    await axios({url: 'https://....'})
      .then(
        (response) => {
          const payload: User = response && response.data
          commit('profileLoaded', payload)
        },
        (error) => {
          commit('profileError')
        });
  }
}

// vuex/types/index.d.ts
export interface ActionTree<S, R> {
  [key: string]: Action<S, R>;
}
