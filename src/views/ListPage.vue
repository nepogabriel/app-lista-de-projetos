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

    <ion-button router-link="/registerProject">+</ion-button>
  </layout-default>
</template>

<script>
  import {IonList, IonItem, IonLabel, IonButton} from "@ionic/vue";
  export default {
    components: {
      IonList,
      IonItem,
      IonLabel,
      IonButton,
    },
    methods:{
      navegaItemLista() {
        this.$router.name({name:'projeto'})
      }
    }
  }
</script>

<style scoped>
ion-button {
  position: fixed;
  bottom: 20px;
  right: 2.5rem;
  height: 4.5rem;
  width: 4.5rem;
  font-size: 3rem;
  --background: var(--ion-color-success-tint);
}
</style>