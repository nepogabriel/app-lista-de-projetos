<template>
  <layout-default>
    <ion-list>
      <ion-item>
        <ion-label position="stacked">Nome:</ion-label>
        <ion-input></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Descrição</ion-label>
        <ion-input></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Valor</ion-label>
        <ion-input></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Ações</ion-label>
        <ion-textarea placeholder="Informe uma ação por linha"></ion-textarea>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Referências</ion-label>
        <ion-textarea placeholder="Informe uma referência por linha"></ion-textarea>
      </ion-item>
    </ion-list>
  </layout-default>
</template>

<script>
  import {IonInput} from '@ionic/vue';

  export default {
    components: {
      IonInput
    }
  }
</script>