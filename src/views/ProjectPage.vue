<template>
  <ion-page>
    <h1>Informações do Projeto</h1>

  </ion-page>
</template>

<script>
  import {IonPage} from '@ionic/vue';

  export default {
    components: {
      IonPage
    },
    data() {
      return {
        projeto: {},
        carregando: false,
      }
    },
    methods: {
      async getProject() {
        this.carregando = true;
        return await fetch('http://apival.pousadatucanodomarahu.com.br/api/app/info/ID', {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
        })
            .then((response) => {
              this.carregando = false;
              switch (true) {
                case response.status >= 100 && response.status < 200:
                  return false;
                case response.status >= 200 && response.status < 300:
                  this.projeto = response.json().then((json) => json);
                  return true;
                case response.status >= 400 && response.status < 500:
                  return false;
                case response.status >= 500 && response.status < 600:
                  return false;
                default:
                  return false;
              }
            })
            .catch((error) => {
              this.carregando = false;
              alert(`Erro ao tentar se comunicar com o servidor.\n\n${error}`)
              return false;
            });
      },
    }
  }
</script>