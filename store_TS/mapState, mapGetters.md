# Использование mapState и mapGetters

import Vue, { VueConstructor } from 'vue';
import { mapState } from 'vuex';
import { MyState } from '@/store';

interface VuexBindings {
stateVar: string;
}

export default (Vue as VueConstructor<Vue & VuexBindings>).extend({
  computed: {
    ...mapState({
    stateVar: (state: MyState) => state.stateVar,
    }),
  }
  
})
