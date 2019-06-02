<template>
  <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/grid">Grid</router-link> |
      <router-link to="/forms">Forms</router-link>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Nav extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import 'styles/common';
#nav {
  width: 100%;
  padding: 30px;
  border-bottom: 1px solid $border-color;
  background: white;
  display: flex;
  flex-direction: row;
  justify-content: center;

  a {
    font-weight: bold;
    color: #2c3e50;
    margin: 0 5px;
    &.router-link-exact-active {
      color: $accent-color;
    }
  }
}
</style>
