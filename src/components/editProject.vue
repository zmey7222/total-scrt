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
        <project-basic></project-basic>        
      </v-tab-item>


      <!-- Данные клиента -->
      <v-tab-item>
        <project-client></project-client>
      </v-tab-item>

      <!-- обект -->
      <v-tab-item>
        <project-object></project-object>
      </v-tab-item>

      <!-- договор -->
      <v-tab-item>
        <project-contract></project-contract>
      </v-tab-item>

      <!-- абонплата -->
      <v-tab-item>
        <project-payment></project-payment>
      </v-tab-item>

    </v-tabs-items>
  </v-card>
</template>

<script>

  import ProjectBasic from './projectBasic.vue'
  import ProjectClient from './projectClient.vue'
  import ProjectObject from './projectObject.vue'
  import ProjectContract from './projectContract.vue'
  import ProjectPayment from './projectPayment.vue'

  export default {

    components: {
        ProjectBasic, ProjectClient, ProjectObject, ProjectContract, ProjectPayment 
    },

    methods: {},
 
    data: () => ({
 
      tabs:null,


      
    }),
  }
</script>