Если в компоненте используются Vue-системные переменные
this.$router
this.from_data

то надо заявлять так:

import Vue, { VueConstructor } from 'vue'
export default (Vue as VueConstructor<Vue>).extend({
 ...
})
или даже проще:

import Vue from 'vue'
export default Vue.extend({   //вообще-то это базовая запись.
 ...
})


........
ИЛИ
    computed: {
      dd(this: any) {
        return this.$store.getters.my
      }
    },
    onByProduct(this: any): void {      //обязательно!!!
      this.CLEAR_BASKET
    }


