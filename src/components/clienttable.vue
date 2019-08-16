<template>
  <div>
    <template v-slot:top >
      <v-toolbar flat color="white">
        <v-toolbar-title>Клиенты</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark class="mb-2" @click= "addItem">Добавить</v-btn>
        </template>
        <v-dialog v-model="dialog" max-width="700px">
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>
          
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.name" label="Наименование"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.egrpou" label="ЕГРПОУ"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.adress" label="Адрес"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.phone" label="Телефон"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.email" label="Email"></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
            
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" dark class="mb-2" @click="close">Отмена</v-btn>
              <v-btn color="primary" dark class="mb-2" @click="save">Сохранить</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>

  <v-data-table 
    :headers="headers"
    :items="clients"
    class="elevation-1"
  >
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
    <template slot="items" slot-scope="props">
					<td>{{ props.item.name }}</td>
					<td class="text-xs-left">{{ props.item.egrpou  }}</td>
					<td class="text-xs-left">{{ props.item.address }}</td>
					<td class="text-xs-left">{{ props.item.phone }}</td>
					<td class="text-xs-left">{{ props.item.email }}</td>
					<td class="text-xs-left">
            <template v-slot:item.action="{ item }">
              <v-icon
                small
                class="mr-2"
                @click= "editItem(props.item)"
              >
                edit
              </v-icon>
              <v-icon
                small
                @click="deleteItem(props.item)"
              >
                delete
              </v-icon>
            </template>
          </td>
    </template>

  </v-data-table>
  </div>

</template>


<script>
 export default {
    data: () => ({
      dialog: false,
      headers: [
        {
          text: 'Наименование',
          align: 'left',
          sortable: true,
          value: 'name',
        },
        { text: 'ЕГРПОУ', value: 'egrpou', sortable: true},
        { text: 'Адрес', value: 'address', sortable: false},
        { text: 'Телефон', value: 'phone', sortable: false },
        { text: 'Email', value: 'email', sortable: false },
        { text: 'Действия', value: 'action', sortable: false },
      ],
      clients: [],
      item: [], 
      editedIndex: -1,
      editedItem: {
        name: '',
        egrpou: '',
        address: '',
        phone: '',
        email: '',
      },
      defaultItem: {
        name: '',
        egrpou: '',
        address: '',
        phone: '',
        email: '',
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Новый клиент' : 'Редактирование'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
       this.clients = [
         {
            name: 'ФОП Пупкин',
            egrpou: '1236547890',
            address: 'м.Киев',
            phone: '+380507777777',
            email: '1@2.3',
          },
        ]
      },

      editItem (item) {
        this.editedIndex = this.clients.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.clients.indexOf(item)
        confirm('Подтвердите удаление записи?') && this.clients.splice(index, 1)
      },
      addItem(){
          this.dialog=true
      },
      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.clients[this.editedIndex], this.editedItem)
        } else {
          this.clients.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>