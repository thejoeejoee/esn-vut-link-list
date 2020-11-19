<template>
  <div id="app">
    <LinkList/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LinkList from './components/LinkList.vue';

@Component({
  components: {
    LinkList,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
