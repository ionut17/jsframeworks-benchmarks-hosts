<template>
  <div class="forms">
    <h1>This is a forms page</h1>
    <form class="forms-wrapper">
      <template v-for="i in count">
        <input type="text" v-bind:placeholder="'Input '+i">
        <select>
          <option hidden value="">Placeholder</option>
          <option v-for="val in dropdownValues" v-bind:value="val">{{val}}</option>
        </select>
      </template>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Forms extends Vue {

  count: number = 100;
  dropdownValues: string[] = Array.from(Array(this.count)).map((v,i)=>`Value ${i+1}`);

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import 'styles/common';
.forms-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    input, select {
      width: 200px;
      margin: 5px;
    }

    &:not(:first-child){
      margin-top: 10px;
    }

    button{
      margin-top: 10px;
    }
}
</style>