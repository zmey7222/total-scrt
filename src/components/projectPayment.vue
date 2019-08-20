<template>
        <v-container fluid>

          <v-layout row justify-space-between> 

            <v-flex md3>
              <v-text-field
                v-model="abonent_payment"
                :rules="[rules.required]"
                filled
                clearable
                clearable-icon
                :color="$root.themeColor"
                label="Абонплата, всего"
                style="min-height: 96px"
              ></v-text-field>            
            </v-flex>

            <v-flex md3>
              <v-select
                v-model="abonent_type_payment"
                :items="abonent_type_payment_items"
                :color="$root.themeColor"
                filled
                label="Тип оплаты"
                outlined
              ></v-select>              
            </v-flex>

            <v-flex md3>
              <v-text-field
                v-model="abonent_payment_liability"
                :rules="[rules.required]"
                filled
                clearable
                clearable-icon
                :color="$root.themeColor"
                label="Материальная ответственность"
                style="min-height: 96px"
              ></v-text-field>            
            </v-flex>
          </v-layout>

          <v-layout row justify-space-between> 
            <v-flex md3>
              <v-text-field
                v-model="abonent_payment_base"
                :rules="[rules.required]"
                filled
                clearable
                clearable-icon
                :color="$root.themeColor"
                label="Базовая оплата за охрану"
                style="min-height: 96px"
              ></v-text-field>            
            </v-flex>

            <v-flex md3>
              <v-text-field
                v-model="abonent_payment_checkout"
                :rules="[rules.required]"
                filled
                clearable
                clearable-icon
                :color="$root.themeColor"
                label="Кол.допвыездов ГБР"
                style="min-height: 96px"
              ></v-text-field>            
            </v-flex>

            <v-flex md3>
              <v-text-field
                v-model="abonent_payment_checkout_payment"
                :rules="[rules.required]"
                filled
                clearable
                clearable-icon
                :color="$root.themeColor"
                label="Стоимоть допвыездов ГБР"
                style="min-height: 96px"
              ></v-text-field>            
            </v-flex>

          </v-layout>
        </v-container>    
</template>

<script>
export default {
    methods: {

      clear_abonement_payment() {
        const vm = this;
        vm.object_category= vm.object_category_items[0];
        vm.object_type =  vm.object_type_items[0];
        vm.service_type=  vm.service_type_items[0];
        vm.address_object= undefined;
      },
      save_abonement_payment() {
        alert('Данные сохранены...');
      },

      clear_contract() {
        const vm = this;
        vm.contract_number= undefined;
        vm.contract_date= new Date().toISOString().substr(0, 10);
        vm.contract_start_date= new Date().toISOString().substr(0, 10);
        vm.contract_stop_date= new Date().toISOString().substr(0, 10);
        vm.contract_codeword= undefined;
        vm.contract_confidant_1= vm.contract_confidant_1_items[0];
        vm.contract_confidant_2= vm.contract_confidant_1_items[0];
        vm.contract_confidant_3= vm.contract_confidant_1_items[0];
        vm.contract_confidant_4= vm.contract_confidant_1_items[0];

      },
      save_contract() {
        alert('Данные сохранены...');
      },

    },




    data: () => ({
      

      abonent_payment: undefined,
      abonent_type_payment: 'Не определен',
      abonent_type_payment_items: ['Не определен', 'Наличный расчет', 'Безнал расчет (с НДС)', 'Безнал расчет (без НДС)'],
      abonent_payment_liability: undefined,
      abonent_payment_base: undefined,
      abonent_payment_checkout: undefined,
      abonent_payment_checkout_payment: undefined,

      rules: {
              email: v => (v || '').match(/@/) || 'Введите корректный email',
              length: len => v => (v || '').length >= len || `Минимальное количество цифр ${len}`,
              //egrpou: v => (v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
              digit: v => (v || '').match(/^(?=.*\d).+$/) ||'Поле должно содержать только цифры',
              required: v => !!v || 'Поле, обязательное для заполнения',
             },   

      
    }),    
}
</script>