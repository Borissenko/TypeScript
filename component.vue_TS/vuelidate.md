1.npm i vuelidate
  import {required} from 'vuelidate/lib/validators'
  
  хотя реально файл будет находиться в node_modules/@types/vuelidate/lib/validators.d.ts
  
2. дополнительно к npm vuelidate 
   НАДО устанавливать
   npm i @types/vuelidate --save-dev
   ==> this.$v начинает типизироваться

3.  data: () => ({
      form: {
        login: ''
      } as Auth,
      loginNoDirty: false as boolean
    }),  
    validations: {   //как обычно
      form: {
        login: {
          required
        }
      }
    },
    methods: {
      onSubmit() {
        // @ts-ignore         // валидируемые переменные от $v все равно не типизируются, требуется игнорить(!)
        if(!this.$v.form.login.$dirty)
          this.loginNoDirty = true

        if (this.form.login && this.form.password) {
          this.AUTH_FORM(this.form)
            .then (() => this.$router.push('/todo'))
        }
      }
    }
  
  
  
  
  
  
  
  
  
  
  
  