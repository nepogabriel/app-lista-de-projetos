<template>
  <layout-default>
    <h1>Informações do Projeto</h1>
    <ion-list>
      <ion-item>
        <ion-label>{{projeto.nome}}</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>{{projeto.descricao}}</ion-label>
      </ion-item><ion-item>
      <ion-label>{{projeto.acoes}}</ion-label>
    </ion-item><ion-item>
      <ion-label>{{projeto.valor}}</ion-label>
    </ion-item>
    </ion-list>
    <ion-button class="button button-cancel" @click="voltar()" router-link="/home">
      ←
    </ion-button>
  </layout-default>
 </template>

<script>
  import { IonList, IonItem, IonLabel, IonButton} from '@ionic/vue';
  import LayoutDefault from "@/views/LayoutDefault";

  export default {
    components: {
      LayoutDefault,
      IonList,
      IonItem,
      IonLabel,
      IonButton
    },
    data() {
      return {
        projeto: {},
        carregando: false,
      }
    },
    mounted() {
      this.getProjeto(this.$route.params.id);
    },
    methods: {
      voltar() {
        this.$router.go(-1);
      },
      async getProjeto(ID) {
        this.carregando = true;
        return await fetch(`http://apival.pousadatucanodomarahu.com.br/api/app/info/${ID}`, {
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
                  return response.json().then((data) => {
                    this.projeto = data;
                  });
                case response.status >= 400 && response.status < 500:
                  return false;
                case response.status >= 500 && response.status < 600:
                  return false;
                default:
                  return false;
              }
            })
            .catch(() => {
              this.carregando = false;
              return false;
            });
      },
    }
  }
</script>

<style scoped>
.button {
  position: fixed;
  bottom: 20px;
  min-width: 3.5rem;
  height: 3.5rem;
  right: 1.5rem;
  font-size: 1.5rem;
}
</style>