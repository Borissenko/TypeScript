// profile/getters.ts
import { GetterTree } from 'vuex';

import { ProfileState } from './types';   //ProfileState- это интерфейс state у модуля
import { RootState } from '../types';    //RootState- это интерфейс главного state



//здесь речь идет о геттерах в модуле Profile, а не в корневом сторе
export const getters: GetterTree<ProfileState, RootState> = {
  fullName(state): string {
    const { user } = state;
    const firstName = (user && user.firstName) || '';
    const lastName = (user && user.lastName) || '';
    return `${firstName} ${lastName}`;
  }
};

// vuex/types/index.d.ts
export interface GetterTree<S, R> {
  [key: string]: Getter<S, R>;
}

