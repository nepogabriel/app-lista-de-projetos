<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Projetos</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <slot/>
    </ion-content>
  </ion-page>
</template>

<script>
  import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent} from "@ionic/vue";

  export default {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
  }
</script>

<style>
  ion-toolbar {
    --background: var(--ion-color-primary);
    --color: #000;
    text-align: center;
  }

  ion-item {
    border-bottom: 1px solid #fff;
  }
</style>