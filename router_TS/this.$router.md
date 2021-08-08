
# Типизируем this.$router
import {Dictionary} from "vue-router/types/router"


this.$router.push({
  name: 'Add', 
  query: {point: id.toString()} as unknown as Dictionary<string>
})





