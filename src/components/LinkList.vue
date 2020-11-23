<template>
  <div class="LinkList">
    <transition-group name="list-complete">
    <a
        v-for="([title, link, theme, icon], i) in links"
        :href="link" :key="link"
        class="LinkList__item"
        :class="`LinkList__item--${theme}`"
        target="_blank" rel="noopener"
    >
      {{ title }}
      <span
          class="LinkList__strip"
          :class="{'LinkList__strip--with-icon': !!(icon.trim())}"
          :style="{ backgroundColor: colors[i % colors.length] }"
      >
        <img
            v-if="!!(icon.trim())" class="LinkList__icon"
            :src="`https://simpleicons.org/icons/${icon}.svg`"
            :alt="icon"
        >
      </span>
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
  transition:
      all ease 200ms,
      transform ease 400ms;
}

.LinkList__item--gray {
  color: white;
  background-color: darken(darkgrey, 30%);
}

.LinkList__strip {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: .5em;
  &--with-icon {
    width: 2.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 50%;
    }
  }
}

.LinkList__icon {
  max-height: 100%;
}

.list-complete-enter, .list-complete-leave-to {
  opacity: 0;
  transform: translateX(50vw);
}
.list-complete-leave-active {
  position: absolute;
}
</style>
