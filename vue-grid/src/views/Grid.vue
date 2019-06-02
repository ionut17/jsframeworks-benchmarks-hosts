<template>
  <div class="grid">
    <h1>Grid: {{rows}} rows, {{columns}} columns</h1>
    <button v-on:click="addRows(1000)">Add 1000 rows</button>
    <button v-on:click="removeRows(1000)">Remove 1000 rows</button>
    <button v-on:click="addRows(10000)">Add 10,000 rows</button>
    <button v-on:click="removeRows(10000)">Remove 10,000 rows</button>
    <button v-on:click="clearRows()">Clear rows</button>
    <Grid :rows="rows" :columns="columns"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Grid from "@/components/Grid.vue"; // @ is an alias to /src

@Component({
  components: {
    Grid
  }
})
export default class GridPage extends Vue {
  rows: number = 100;
  columns: number = 10;

  addRows(count: number) {
    this.rows += count;
  }

  removeRows(count: number){
    this.rows -= this.rows > count ? count : this.rows;
  }

  clearRows() {
    this.rows = 0;
  }
}
</script>