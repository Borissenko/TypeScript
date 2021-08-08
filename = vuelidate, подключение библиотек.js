Статья про декларацию типов
https://xsltdev.ru/typescript/058/



Ищем @types/библиотеку (!)
Они храняться здесь:
https://www.typescriptlang.org/dt/search?search=

и далее устанавливаем ее через npm.
Особенно обращаем внимание на наличие зависимостей у этой библиотеки. ))


//package.json
npm i @types/vuelidate -D   // -D - что бы установилось в DEV-зависимости.
npm i @types/vue -D         // зависимость у @types/vuelidate.  Но вроде-как не очень то и нужен. ))

"dependencies": {
  "vuelidate": "^0.7.5",
},
"devDependencies": {
  "@types/vuelidate": "^0.7.13",
}



//main.ts
import Vue from "vue";
import Vuelidate from 'vuelidate';

Vue.use(Vuelidate);



//tsconfig.json
{
  "compilerOptions": {
    "types": [
    "webpack-env",
    "jest",
    "vuelidate",    //надо вписать(!!!)
    "vue"           //надо вписать(!!!)  Но вроде-как не очень то и нужен. ))
    ]
  }
}


//vuelidate.d.ts
это "Type Definitions".
Требуется положить этот файл рядом с tsconfig.json.
Правда, не совсем понятно. Но вроде скорее нужен, чем не нужен.
Специально его нигде регистрировать не требуется.



//component.vue
import { validationMixin } from 'vuelidate'       //Но вроде-как не очень то и нужен. ))
import { required, minLength, email } from 'vuelidate/lib/validators';

export default Vue.extend({
  mixins: [validationMixin],    //(!)  Но вроде-как не очень то и нужен. ))
  data() {
    return {
      email: '',
      password: '',
    };
  },
  validations: {
    email: {
      email,
      required,
    },
    password: {
      required,
      minLength: minLength(8),
    },
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.signIn();
      }
    },
  },
});








