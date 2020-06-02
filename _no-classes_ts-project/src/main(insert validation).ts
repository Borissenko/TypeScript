import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// @ts-ignore
import Vuelidate from 'vuelidate'  //если зависимость отторгается тайпскриптом,
// то в перед ее декларацией добавляем "// @ts-ignore" (!).

Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
