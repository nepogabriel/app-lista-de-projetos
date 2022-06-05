<template>
  <layout-default>
      <ion-list>
        <ion-item router-link="/projeto/1">
          <ion-label>Aplicativo Hamburgueria</ion-label>
        </ion-item>

        <ion-item router-link="/projeto/2">
          <ion-label>Sistema WEB Lava Jato</ion-label>
        </ion-item>

        <ion-item router-link="/projeto/3">
          <ion-label>Aplicativo Clínica Médica</ion-label>
        </ion-item>

        <ion-item router-link="/projeto/4">
          <ion-label>Sistema Reserva Hotelaria</ion-label>
        </ion-item>
      </ion-list>
  </layout-default>
</template>

<script>
  import {IonList, IonItem, IonLabel} from "@ionic/vue";
  export default {
    components: {
      IonList,
      IonItem,
      IonLabel
    },
    methods:{
      navegaItemLista() {
        this.$router.name({name:'projeto'})
      }
    }
  }
</script>