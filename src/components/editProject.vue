<template>
  <v-card>
    <v-toolbar
      :color="$root.themeColor"
      dark
      flat
      prominent
    >
    <v-toolbar-title>
      Новый проект
    </v-toolbar-title>

      <v-tabs 
        slot="extension"
        v-model="tabs"

        :color="$root.themeColor"
        white
        grow
      >
        <v-tab>
          Основные
        </v-tab>
        <v-tab>
          Данные клиента
        </v-tab>
        <v-tab>
          Объект
        </v-tab>
        <v-tab>
          Договор
        </v-tab>
        <v-tab>
          Абонплата
        </v-tab>
        <v-tab>
          Монтаж
        </v-tab>
        <v-tab>
          Формуляр
        </v-tab>
      </v-tabs>
    </v-toolbar>

    <v-tabs-items v-model="tabs">
      <!-- Основные -->
      <v-tab-item>
        <v-container fluid>
          <v-layout row justify-space-between> 
            <v-flex md3>
              <v-select
                v-model="status_project"
                :items="status_project_items"
                :color="$root.themeColor"
                filled
                label="Статус"
                outlined
              ></v-select>              
            </v-flex>

            <v-flex md3>
            <!--<v-col cols="12" sm="6">-->
              <v-text-field
                v-model="number"
                clearable
                clearable-icon
                filled
                :rules="[rules.required]"
                :color="$root.themeColor"
                label="Номер"
                style="min-height: 96px"
              ></v-text-field>            
            <!--</v-col>-->
            </v-flex>

            <v-flex md5>
              <v-menu
                ref="menu_project_date"
                v-model="menu_project_date"
                :close-on-content-click="false"
                :return-value.sync="project_date"
                transition="scale-transition"
                offset-y
                full-width
                min-width="290px"
              >
                <template slot="activator">
                  <v-text-field
                    v-model="project_date"
                    label="Дата проекта"
                    prepend-icon="event"
                    readonly
                  ></v-text-field>
                </template>

                <v-date-picker v-model="project_date" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="menu_project_date = false">Отмена</v-btn>
                  <v-btn text color="primary" @click="$refs.menu_project_date.save(project_date)">OK</v-btn>
                </v-date-picker>
              </v-menu>

            </v-flex>
          </v-layout> 

          <v-layout row justify-space-between> 
            <v-flex md4>
              <v-select
                v-model="owner_project"
                :items="owner_project_items"
                :color="$root.themeColor"
                filled
                label="Ответственный"
                outlined
              ></v-select>              
            </v-flex>
          </v-layout>

          <v-layout row>
          <v-flex>

            <v-card-actions>
              <v-btn
                text
                class="white--text"
                :color="$root.themeColor"
                @click="clear_basic()"
              >
                Очистить
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn
                class="white--text"
                :color="$root.themeColor"
                depressed
                @click="save_basic()"
              >
                Сохранить
              </v-btn>
            </v-card-actions>  
          </v-flex>
          </v-layout>
        </v-container>
      </v-tab-item>


      <!-- Данные клиента -->
      <v-tab-item>
        <v-container fluid>
          <v-layout row justify-space-between> 
            <v-flex md3>
              <v-select
                v-model="client_type"
                :items="client_type_items"
                :color="$root.themeColor"
                filled
                label="Тип клиента"
                outlined
              ></v-select>              
            </v-flex>

            <v-flex md8>
            <!--<v-col cols="12" sm="6">-->
              <v-text-field
                v-model="client_name"
                clearable
                clearable-icon
                filled
                :color="$root.themeColor"
                label="Наименование"
                style="min-height: 96px"
              ></v-text-field>            
            <!--</v-col>-->
            </v-flex>
          </v-layout>

          <v-layout row justify-space-between>
            <v-flex md3>
              <v-text-field
                v-model="egrpou"
                :rules="[rules.required, rules.digit, rules.length(8)]"
                clearable
                clearable-icon
                filled
                :color="$root.themeColor"
                label="ЕГРПОУ / Иден. код"
                style="min-height: 96px"
              ></v-text-field>            
            </v-flex>

            <v-flex md8>
              <v-text-field
                v-model="contact"
                clearable
                clearable-icon
                filled
                :color="$root.themeColor"
                label="Контактное лицо"
                style="min-height: 96px"
              ></v-text-field>            
            </v-flex>
          </v-layout>

          <v-layout row justify-space-between>
            <v-flex md2>
              <v-text-field
                v-model="phone"
                :rules="[rules.required, rules.digit, rules.length(10)]"
                clearable
                clearable-icon
                filled
                :color="$root.themeColor"
                label="Телефон"
                style="min-height: 96px"
              ></v-text-field>            
            </v-flex>

            <v-flex md2>
              <v-text-field
                v-model="email"
                :rules="[rules.email]"
                filled
                clearable
                clearable-icon
                :color="$root.themeColor"
                label="Email"
                style="min-height: 96px"
              ></v-text-field>            
            </v-flex>

            <v-flex md6>
              <v-text-field
                v-model="address"
                :rules="[rules.required]"
                filled
                clearable
                clearable-icon
                :color="$root.themeColor"
                label="Фактический адрес"
                style="min-height: 96px"
              ></v-text-field>            
            </v-flex>
          </v-layout>

          <v-layout row>
          <v-flex>

            <v-card-actions>
              <v-btn
                text
                class="white--text"
                :color="$root.themeColor"
                @click="clear_client()"
              >
                Очистить
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn
                class="white--text"
                :color="$root.themeColor"
                depressed
                @click="save_client()"
              >
                Сохранить
              </v-btn>
            </v-card-actions>  
          </v-flex>
          </v-layout>
        </v-container>
      </v-tab-item>

      <!-- обект -->
      <v-tab-item>
        <v-container fluid>
          <v-layout row justify-space-between> 
            <v-flex md3>
              <v-select
                v-model="object_category"
                :items="object_category_items"
                :color="$root.themeColor"
                filled
                label="Категория объекта"
                outlined
              ></v-select>              
            </v-flex>

            <v-flex md3>
              <v-select
                v-model="object_type"
                :items="object_type_items"
                :color="$root.themeColor"
                filled
                label="Тип объекта"
                outlined
              ></v-select>              
            </v-flex>

            <v-flex md3>
              <v-select
                v-model="service_type"
                :items="service_type_items"
                :color="$root.themeColor"
                filled
                label="Тип услуги"
                outlined
              ></v-select>              
            </v-flex>
          </v-layout> 
          <v-layout row justify-space-between> 

            <v-flex md6>
              <v-text-field
                v-model="address_object"
                :rules="[rules.required]"
                filled
                clearable
                clearable-icon
                :color="$root.themeColor"
                label="Адрес объекта"
                style="min-height: 96px"
              ></v-text-field>            
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex>

              <v-card-actions>
                <v-btn
                  text
                  class="white--text"
                  :color="$root.themeColor"
                  @click="clear_object()"
                >
                  Очистить
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                  class="white--text"
                  :color="$root.themeColor"
                  depressed
                  @click="save_object()"
                >
                  Сохранить
                </v-btn>
              </v-card-actions>  

            </v-flex>
          </v-layout>
        </v-container>


      </v-tab-item>

      <!-- договор -->
      <v-tab-item>
        <v-container fluid>

          <v-layout row justify-space-between> 

            <v-flex md2>
              <v-text-field
                v-model="contract_number"
                :rules="[rules.required]"
                filled
                clearable
                clearable-icon
                :color="$root.themeColor"
                label="Номер договора"
                style="min-height: 96px"
              ></v-text-field>            
            </v-flex>


            <v-flex md3>
              <v-menu
                ref="menu_contract_date"
                v-model="menu_contract_date"
                :close-on-content-click="false"
                :return-value.sync="contract_date"
                transition="scale-transition"
                offset-y
                full-width
                min-width="290px"
              >
                <template slot="activator">
                  <v-text-field
                    v-model="contract_date"
                    label="Дата договора"
                    prepend-icon="event"
                    readonly
                  ></v-text-field>
                </template>

                <v-date-picker v-model="contract_date" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="menu_contract_date = false">Отмена</v-btn>
                  <v-btn text color="primary" @click="$refs.menu_contract_date.save(contract_date)">OK</v-btn>
                </v-date-picker>
              </v-menu>

            </v-flex>

            <v-flex md3>
              <v-menu
                ref="menu_contract_start_date"
                v-model="menu_contract_start_date"
                :close-on-content-click="false"
                :return-value.sync="contract_start_date"
                transition="scale-transition"
                offset-y
                full-width
                min-width="290px"
              >
                <template slot="activator">
                  <v-text-field
                    v-model="contract_start_date"
                    label="Дата договора"
                    prepend-icon="event"
                    readonly
                  ></v-text-field>
                </template>

                <v-date-picker v-model="contract_start_date" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="menu_contract_start_date = false">Отмена</v-btn>
                  <v-btn text color="primary" @click="$refs.menu_contract_start_date.save(contract_start_date)">OK</v-btn>
                </v-date-picker>
              </v-menu>

            </v-flex>
          </v-layout> 

          <v-layout row justify-space-between> 

            <v-flex md3>
              <v-menu
                ref="menu_contract_stop_date"
                v-model="menu_contract_stop_date"
                :close-on-content-click="false"
                :return-value.sync="contract_stop_date"
                transition="scale-transition"
                offset-y
                full-width
                min-width="290px"
              >
                <template slot="activator">
                  <v-text-field
                    v-model="contract_stop_date"
                    label="Дата окончания договора"
                    prepend-icon="event"
                    readonly
                  ></v-text-field>
                </template>

                <v-date-picker v-model="contract_stop_date" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="menu_contract_stop_date = false">Отмена</v-btn>
                  <v-btn text color="primary" @click="$refs.menu_contract_stop_date.save(contract_stop_date)">OK</v-btn>
                </v-date-picker>
              </v-menu>
            </v-flex>

            <v-flex md3>
              <v-text-field
                v-model="contract_codeword"
                :rules="[rules.required]"
                filled
                clearable
                clearable-icon
                :color="$root.themeColor"
                label="Кодовое слово подтверждения отмены"
                style="min-height: 96px"
              ></v-text-field>    
            </v-flex>

            <v-flex md3>
              <v-select
                v-model="contract_confidant_1"
                :items="contract_confidant_1_items"
                :color="$root.themeColor"
                filled
                label="Доверенное лицо №1"
                outlined
              ></v-select>              
            </v-flex>

          </v-layout> 

          <v-layout row justify-space-between> 
            <v-flex md3>
              <v-select
                v-model="contract_confidant_2"
                :items="contract_confidant_1_items"
                :color="$root.themeColor"
                filled
                label="Доверенное лицо №2"
                outlined
              ></v-select>              
            </v-flex>

            <v-flex md3>
              <v-select
                v-model="contract_confidant_3"
                :items="contract_confidant_1_items"
                :color="$root.themeColor"
                filled
                label="Доверенное лицо №3"
                outlined
              ></v-select>              
            </v-flex>

            <v-flex md3>
              <v-select
                v-model="contract_confidant_4"
                :items="contract_confidant_1_items"
                :color="$root.themeColor"
                filled
                label="Доверенное лицо №4"
                outlined
              ></v-select>              
            </v-flex>

          </v-layout> 

          <v-layout row justify-space-between> 
            Здесь будут иконки сканов договора и проекта монтажа
          </v-layout> 

          <v-layout row>
            <v-flex>

              <v-card-actions>
                <v-btn
                  text
                  class="white--text"
                  :color="$root.themeColor"
                  @click="clear_contract()"
                >
                  Очистить
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                  class="white--text"
                  :color="$root.themeColor"
                  depressed
                  @click="save_contract()"
                >
                  Сохранить
                </v-btn>
              </v-card-actions>  

            </v-flex>
          </v-layout>


        </v-container>
      </v-tab-item>

      <!-- Формуляр -->
      <v-tab-item>
        <v-card flat>
        <!--  <v-card-title class="headline">An even better title</v-card-title>-->
          <v-card-text>
            <p>
              Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Sed hendrerit. Maecenas malesuada. Vestibulum ullamcorper mauris at ligula. Proin faucibus arcu quis ante.
            </p>

            <p class="mb-0">
              Etiam vitae tortor. Curabitur ullamcorper ultricies nisi. Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Aliquam lobortis. Suspendisse potenti.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>

    </v-tabs-items>
  </v-card>
</template>

<script>
  export default {
    methods: {
      clear_basic() {
        const vm = this;
        vm.status_project= vm.status_project_items[0];
        vm.number= undefined;
        vm.project_date= new Date().toISOString().substr(0, 10);
        vm.owner_project= vm.owner_project_items[0];
      },
      save_basic() {
        alert('Данные сохранены...');
      },

      clear_client() {
        const vm = this;
        vm.client_type= vm.client_type_items[0];
        vm.client_name= undefined;
        vm.egrpou= undefined;
        vm.contact= undefined;
        vm.phone= undefined;
        vm.email= undefined;
        vm.address= undefined;
      },
      save_client() {
        alert('Данные сохранены...');
      },

      clear_object() {
        const vm = this;
        vm.object_category= vm.object_category_items[0];
        vm.object_type =  vm.object_type_items[0];
        vm.service_type=  vm.service_type_items[0];
        vm.address_object= undefined;
      },
      save_object() {
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

      status_project_items: ['Новый','Подписание договора', 'Монтаж', 'Не определен'],
      status_project: 'Не определен',
      number: undefined,
      project_date: new Date().toISOString().substr(0, 10),
      owner_project: 'Не определен',
      owner_project_items: ['Не определен', 'Вася Пупкин', 'Пушкин А.С.'],   
      menu_project_date: false,



      client_type: 'Не определен',
      client_type_items: ['Не определен', 'Юридическое лицо', 'Физическое лицо', 'Частный предприниматель'],  
      client_name: undefined,
      egrpou: undefined,
      contact: undefined,
      phone: undefined,
      email: undefined,
      address:undefined,
      tabs:null,

      object_category: 'Не определена',
      object_category_items: ['Не определена', 'Частная собственность','Государственная собственность', 'Комунальная собственность'],
      object_type:  'Не определен',
      object_type_items: ['Не определен', 'Квартира','Офис', 'Часный дом', 'Склад', 'Ресторан', 'Коммерческое помещение'],
      service_type: 'Не определен',
      service_type_items: ['Не определен', 'Охранная сигнализация','Пожарная сигнализация', 'Кнопка тревожного сигнала'],
      address_object: undefined,

      contract_number: undefined,
      contract_date: new Date().toISOString().substr(0, 10),
      menu_contract_date: false,
      contract_start_date: new Date().toISOString().substr(0, 10),
      menu_contract_start_date: false,
      contract_stop_date: new Date().toISOString().substr(0, 10),
      menu_contract_stop_date: false,
      contract_codeword: undefined,
      contract_confidant_1: undefined,
      contract_confidant_1_items: ['Не определен', 'Вася Пупкин', 'Пушкин А.С.'],   
      contract_confidant_2: undefined,
      contract_confidant_3: undefined,
      contract_confidant_4: undefined,


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