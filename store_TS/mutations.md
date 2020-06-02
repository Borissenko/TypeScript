import { MutationTree } from 'vuex';
import { RootState, ProfileState, User } from './types';

export const mutations: MutationTree<ProfileState> = {
  //или можно не усложнять, а написать без типирования константы mutations
export const mutations = {
  profileLoaded(state: RootState, payload: User) {
    state.error = false;
    state.user = payload;
  },
  profileError(state) {
    state.error = true;
    state.user = undefined;
  }
};

// vuex/types/index.d.ts
export interface MutationTree<S> {
  [key: string]: Mutation<S>
}

