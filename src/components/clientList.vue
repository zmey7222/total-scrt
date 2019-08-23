<template>
    <v-card 
        full-width
    >
        <v-card-title>
            Клиенты
            <v-spacer></v-spacer>
            <v-text-field
                v-model="search"
                append-icon="search"
                label="Поиск"
                single-line
                hide-details
        ></v-text-field>
    </v-card-title>

    <v-data-table 
        :headers="headers"
        :items="clients"
        class="elevation-1"
        show-select
        :search="search"
    >

        <template slot="items" slot-scope="props">
				<td>{{ props.item.name }}</td>
				<td class="text-xs-left">{{ props.item.egrpou  }}</td>
				<td class="text-xs-left">{{ props.item.address }}</td>
				<td class="text-xs-left">{{ props.item.phone }}</td>
				<td class="text-xs-left">{{ props.item.email }}</td>
<!--					<td class="text-xs-left">
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
          </td>-->
        </template>

    </v-data-table>
    <template>
        <v-btn text color="primary" @click="close()">Отмена</v-btn>
        <v-btn text color="primary" @click="ret(props.item.name)">OK</v-btn>     
    </template>             
    </v-card>

</template>

<script>

export default {
    data: () => ({
        search: '',
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
//        { text: 'Действия', value: 'action', sortable: false },
        ],
        clients: [],
        item: {
            name: '',
            egrpou: '',
            address: '',
            phone: '',
            email: '',
        },

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

//      editItem (item) {
//        this.editedIndex = this.clients.indexOf(item)
 //       this.editedItem = Object.assign({}, item)
//        this.dialog = true
//      },

//      deleteItem (item) {
//        const index = this.clients.indexOf(item)
//        confirm('Подтвердите удаление записи?') && this.clients.splice(index, 1)
//     },

//      addItem(){
 //         this.dialog=true
//      },

        close () {
            
//        setTimeout(() => {
//          this.editedItem = Object.assign({}, this.defaultItem)
 //         this.editedIndex = -1
//        }, 300)
        },

        ret (name) {
             this.$emit('ret', {name: name, dialog_client_list: false} );
             
            console.log('ret', editedItem.name);
 //       if (this.editedIndex > -1) {
 //         Object.assign(this.clients[this.editedIndex], this.editedItem)
//        } else {
 //         this.clients.push(this.editedItem)
 //       }
//        this.close()
 //     },
        },
    },
}
</script>