<template>
  <div class="App">
    <img src="./assets/logo.svg" alt="ESN VUT Brno" class="App__logo">
    <LinkList/>
    <div class="App__copyright">Joe, ESN VUT Brno &copy; 2020</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LinkList from './components/LinkList.vue';
import {mapActions} from "vuex";
import {
  State,
  Getter,
  Action,
  Mutation,
  namespace
} from 'vuex-class'

//
@Component({
  components: {
    LinkList,
  },
})
export default class App extends Vue {
  @Action loadLinks: any;

  created() {
    this.loadLinks();
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Francois+One&family=Work+Sans:wght@700&display=swap');

html, body {
  background-color: #d8d8d8;
  font-family: 'Francois One', sans-serif;
  padding: 0;
  margin: 0;
  overflow-x: hidden;
}
body {
  display: flex;
  justify-content: center;
}
.App {
  max-width: 480px;
  text-align: center;
  color: #2c3e50;
  flex: 1 1 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  @media screen and (max-width: 520px){
    max-width: 360px;
  }
  @media screen and (max-width: 400px){
    max-width: 280px;
  }
}
.App__logo {
  margin-bottom: 1em;
  max-width: 100%;
}
.App__copyright {
  color: darkgray;
  font-size: .8em;
  margin-bottom: 1em;
  position: absolute;
  bottom: 0;
  text-align: center;
  width: 100%;
}
</style>
