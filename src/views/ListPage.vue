<template>
  <layout-default>
    <ion-list v-for="projeto in projetos" v-bind:key="projeto.id">
      <ion-item @click="goProjeto(projeto.id)">
        <ion-label>{{projeto.nome}}</ion-label>
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
    data() {
      return {
        projetos: [],
        carregando: false,
      }
    },
    methods:{
      navegaItemLista() {
        this.$router.name({name:'projeto'})
      },
      goProjeto(id) {
        this.$router.push(`/projeto/${id}`);
      },
      async getList() {
        this.carregando = true;
        return await fetch('https://apival.pousadatucanodomarahu.com.br/api/app/list', {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
        })
            .then((response) => {
              this.carregando = false;
              switch (true) {
                case response.status >= 200 && response.status < 300:
                  return response.json().then((data) => {
                    this.projetos = data;
                  });
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
    }, mounted() {
      this.getList();
    },
  }
</script>

<style scoped>
ion-button {
  position: fixed;
  bottom: 20px;
  right: 2.5rem;
  height: 3.5rem;
  width: 3.5rem;
  font-size: 2rem;
  --background: var(--ion-color-primary);
}
</style>