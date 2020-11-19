<template>
  <div>

    <ul>
      <li><a href="">link # 11</a></li>
      <li><a href="">link # 21</a></li>
      <li><a href="">link # 31</a></li>
      <li><a href="">link # 41</a></li>
      <li><a href="">link # 51</a></li>
    </ul>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
