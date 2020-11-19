<template>
  <div class="LinkList">
    <transition-group name="list-complete">
    <a
        v-for="([title, link], i) in links"
        :href="link" :key="link"
        class="LinkList__item"
        target="_blank" rel="noopener"
    >
      {{ title }}
      <span class="LinkList__strip" :style="{ backgroundColor: colors[i % colors.length] }"></span>
    </a>
    </transition-group>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {State} from "vuex-class";

@Component
export default class LinkList extends Vue {
  @State links!: Array<Array<string>>;

  colors = [
    '#00AEEF',
    '#EC008C',
    '#7AC143',
    '#F47B20',
    '#2E3192',
  ]
}
</script>

<!-- Add "scoped" attribute to amit CSS to this component only -->
<style scoped lang="scss">
.LinkList {
}

.LinkList__item {
  color: black;
  flex: 1 1 auto;
  padding: .5em 0;
  display: block;
  text-transform: uppercase;
  text-decoration: none;
  position: relative;
  font-size: 1.25em;
  background-color: white;
  margin-bottom: 1em;
  transition: all ease 200ms, transform ease 700ms;

  &:hover {
    box-shadow: 0 0 .3em dimgray;
    transform: scale(1.1);
  }
}

.LinkList__strip {
  position: absolute;
  left: 100%;
  top: 0;
  bottom: 0;
  width: .5em;
}

.list-complete-enter, .list-complete-leave-to {
  opacity: 0;
  transform: translateX(50vw);
}
.list-complete-leave-active {
  position: absolute;
}
</style>
