<template>
  <div id="app">
    <Nav/>
    <main id="page-wrapper">
      <router-view/>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Nav from '@/components/Nav.vue'; // @ is an alias to /src

@Component({
  components: {
    Nav
  },
})
export default class App extends Vue {}
</script>


<style lang="scss">
@import 'styles/main';
#page-wrapper{
  display: flex;
  justify-content: center;
  height: calc(100vh - 77px);
  overflow: auto;

  padding: 0 calc(50vw - 683px);

  & > *{
    width: 100%;
    height: 100%;
  }
}
</style>
