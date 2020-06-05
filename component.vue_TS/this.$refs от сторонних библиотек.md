# Обработка this.$refs, которые используются сторонними библиотеками (здесь- element-ui)
https://github.com/ffxsam/vue-typescript-cookbook

а) Если однократно, то пойдет по-простому:
import Vue from 'vue'
export default Vue.extend({
  methods: {
    test() {
      (this.$refs.dataTable as ElTable).clearSelection();
    },
  },
})

б) Если в нескольких местах, то надо усложнять:

import Vue, { VueConstructor } from 'vue'
import { ElTable } from 'element-ui/types/table'
import GoogleMap from '@/components/shared/GoogleMap.vue'

// With this, you won't have to use "as" everywhere to cast the refs
interface Refs {
  $refs: {
    name: HTMLInputElement
    dataTable: ElTable,
    map: InstanceType<typeof GoogleMap>;
  }
}

export default (Vue as VueConstructor<Vue & Refs>).extend({
  ...
})
