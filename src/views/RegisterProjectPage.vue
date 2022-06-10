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

    <ion-button @click="registerProject({nome, descricao, valor, acoes, referencias})" class="button button-save">
      <ion-spinner v-if="registrando" name="dots"></ion-spinner>
      <ion-icon v-if="!registrando" name="checkmark-outline"></ion-icon>
    </ion-button>

    <ion-button class="button button-cancel" router-link="/home">
      <ion-icon name="close-outline"></ion-icon>
    </ion-button>
  </layout-default>
</template>

<script>
  import {IonList, IonItem, IonLabel, IonInput, IonTextarea, IonButton, IonIcon} from '@ionic/vue';
  import {IonSpinner} from '@ionic/vue';
  import {addIcons} from "ionicons";
  import {checkmarkOutline, closeOutline} from "ionicons/icons";

  export default {
    components: {
      IonList,
      IonItem,
      IonLabel,
      IonInput,
      IonTextarea,
      IonButton,
      IonIcon,
      IonSpinner
    },
    created() {
      addIcons({
        'checkmark-outline': checkmarkOutline,
        'close-outline': closeOutline,
      });
    },
    data() {
      return {
        nome: '',
        descricao: '',
        valor: '',
        acoes: '',
        referencias: '',
        registrando: false,
      }
    },
    methods: {
    async registerProject({nome, descricao, valor, acoes, referencias}) {
        this.registrando = true;
        console.log(JSON.stringify({nome, descricao, valor, acoes, referencias}));
      return await fetch(
          'https://apival.pousadatucanodomarahu.com.br/api/app/create',
          {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
             nome,
              descricao,
              valor,
              acoes,
              referencias,
            }),
          }
      )
          .then((response) => {
            this.registrando = false;
            switch (true) {
              case response.status >= 200 && response.status < 300:
                return true;
              default:
                return false;
            }
          })
          .catch(() => {
                this.registrando = false;
          }
          );
    },
    },
  }
</script>

<style scoped>
.button {
  position: fixed;
  bottom: 20px;
  min-width: 3.5rem;
  height: 3.5rem;
}

.button-save {
  left: 1rem;
  font-size: 1.5rem;
}

.button-cancel {
  right: 1.5rem;
  font-size: 1.5rem;
  --background: var(--ion-color-danger);
}
</style>