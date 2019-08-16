<template>
  <div>
    <template v-slot:top >
      <v-toolbar flat color="white">
        <v-toolbar-title>Типы задач</v-toolbar-title>
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
                    <v-text-field v-model="editedItem.name" label="Тип задач"></v-text-field>
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
    :items="typeOfTasks"
    class="elevation-1"
  >
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
    <template slot="items" slot-scope="props">
			<td>{{ props.item.name }}</td>
            <td>
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
          text: 'Тип задачи',
          align: 'left',
          sortable: true,
          value: 'name',
        },
        { text: 'Действия', value: 'action', sortable: false },

      ],
      typeOfTasks: [],
      item: [], 
      editedIndex: -1,
      editedItem: {
        name: '',
      },
      defaultItem: {
        name: 'Встреча',
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Новый тип задачи' : 'Редактирование'
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
       this.typeOfTasks = [
         {
            name: 'Встреча',
          },
         {
            name: 'Визит-входящий',
          },
         {
            name: 'Звонок-исходящий',
          },
         {
            name: 'СМС-сообщение',
          },
        ]
      },

      editItem (item) {
        this.editedIndex = this.typeOfTasks.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.typeOfTasks.indexOf(item)
        confirm('Подтвердите удаление записи?') && this.typeOfTasks.splice(index, 1)
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
          Object.assign(this.typeOfTasks[this.editedIndex], this.editedItem)
        } else {
          this.typeOfTasks.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>