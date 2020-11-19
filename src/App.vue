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

//     https://docs.google.com/spreadsheets/d/e/2PACX-1vSSXCWVC9oGxqMzYloMuIsVA9t1D-ebQ3IszO0MghNnUdHqc_gpDtosptau1r1oXV4SnpB3NQx6U5Ro/pub?gid=323207252&single=true&output=csv

@Component({
  components: {
    LinkList,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Francois+One&display=swap');

html, body {
  background-color: #d8d8d8;
  font-family: 'Francois One', sans-serif;
  padding: 0;
  margin: 0;
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
  display: flex;
  flex-direction: column;
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
}
</style>
