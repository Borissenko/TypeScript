# Vuex-actions
//actions.ts

# вариант 1, с типизацией { commit } by : ActionContext<>.
import { ActionTree, ActionContext } from 'vuex';
import { RootState, ModuleState } from '@/types';

const actions: ActionTree<ModuleState, RootState> = {
  AUTH_FORM({commit, dispatch}: ActionContext<>, pl: any): Promise<...> | undefined {
    ....
  }
}

# вариант 2 - с указанием типа данных у Action{} и  с типизацией { commit } by : { commit: Commit }.
//https://github.com/farzadmf/vuex-action-tree-issue/blob/master/src/actions.ts

import { ActionTree, Commit } from 'vuex';
import { EndUserState, User } from './types';   //интерфейсы
import { userService } from './services';       // БЛОК ФУНКЦИЙ для Action вынесен в отдельный файл в виде объекта, содержащего функции. См. ниже.

export const SafeData: ActionTree<EndUserState, {}> = {
  CREATE_USER: async ({ commit }: { commit: Commit }, user: User) => { 
    commit(CREATE_USER_START)
    try {
      await userService.createUser(user);
      commit(CREATE_USER_SUCCESS);
    } catch (err) {
      commit(CREATE_USER_FAILURE, err);
    }
  }
}


# вариант 3 - без указания типа данных у Action{} и { commit }.
export const typelessActions = {
  CREATE_USER: async ({ commit }, user: User) => {
    ...
  }
}


// services.js
import { User } from './types';
export const userService = {
  createUser(user: User) {
    ...
  }
}




