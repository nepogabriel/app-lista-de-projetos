<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Meus Contatos</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-item>
          <ion-label>Tiago</ion-label>
        </ion-item>

        <ion-item>
          <ion-label>Gabrille</ion-label>
        </ion-item>

        <ion-item>
          <ion-label>Mônica</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
  import {IonPage, IonHeader, IonTitle, IonContent, IonList, IonItem, IonLabel} from "@ionic/vue";
  export default {
    IonPage,
    IonHeader,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
  }
</script>

<style>
  ion-toolbar {
    --background: var(--ion-color-primary);
    --color: #000;
    text-align: center;
  }
</style>