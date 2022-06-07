<template>
  <layout-default>
    <ion-list>
      <ion-item>
        <ion-label position="stacked">Nome:</ion-label>
        <ion-input v-model="nome"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Descrição</ion-label>
        <ion-input v-model="descricao"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Valor</ion-label>
        <ion-input v-model="valor"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Ações</ion-label>
        <ion-textarea v-model="acoes" placeholder="Informe uma ação por linha"></ion-textarea>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Referências</ion-label>
        <ion-textarea v-model="referencias" placeholder="Informe uma referência por linha"></ion-textarea>
      </ion-item>
    </ion-list>
    <ion-button @click="saveLocal(nome, descricao, valor, acoes, referencias)" class="button button-save">Salvar</ion-button>

    <ion-button class="button button-cancel" router-link="/home">x</ion-button>
  </layout-default>
</template>

<script>
  import {IonList, IonItem, IonLabel, IonInput, IonTextarea, IonButton} from '@ionic/vue';

  export default {
    components: {
      IonList,
      IonItem,
      IonLabel,
      IonInput,
      IonTextarea,
      IonButton,
    },
    data() {
      return {
        nome: '',
        descricao: '',
        valor: '',
        acoes: '',
        referencias: '',
      }
    },
    methods: {
      saveLocal(nome, descricao, valor, acoes, referencias) {
        localStorage.setItem('projeto', JSON.stringify({
          nome: nome,
          descricao: descricao,
          valor: valor,
          acoes: acoes,
          referencias: referencias
        }))
      }
    }
  }
</script>

<style scoped>
.button {
  position: fixed;
  bottom: 20px;
  min-width: 4.5rem;
  height: 4.5rem;
}
.button-save {
  left: 2.5rem;
  font-size: 1.5rem;
}
  .button-cancel {
    right: 2.5rem;
    font-size: 3rem;
    --background: var(--ion-color-danger);
  }
</style>