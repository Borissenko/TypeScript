# Описание типов данных в PROPS'e
https://ru.vuejs.org/v2/guide/typescript.html

import Vue, { PropType, PropOptions } from 'vue'

interface ComplexMessage {   //описание интерфейса
  title: string,
  okMessage: string,
  cancelMessage: string
}

export default Vue.extend({
  props: {
    name: String,
    success: { type: String },
    callback: {
      type: Function as PropType<() => void>   //"наглядная" типизация
    },
    message: {
      type: Object as PropType<ComplexMessage>,  //типизация по интерфейсу
      required: true,
      validator (message: ComplexMessage) {
        return !!message.title;
      }
    },    
    products: {
      type: Array as PropType<ComplexMessage[]>,  //(!) Заявлять Array в пропсе надо именно так(!), иначе будет баг.
      required: true,
    },
    books: {
      type: Array,            //типизируем не по полю "type", а всю переменную вкупе, и через PropOptions.
      default: () => [],               //(!)указание default-значения, через ВОЗВРАТ ФУНКЦИИ, а не напряямую
      validator: function (value) {    //(!)validator- тоже указываем сквозь функццию.
        // ... your validation code
      }
    } as PropOptions<ComplexMessage[]>
  }
})
