<template>
  <div class="grid-builder">
    <table>
        <thead>
            <tr>
                <th v-for="col in columns">Header {{ col }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="row in rows">
                <td v-for="col in columns">
                    <template v-if="col % 3 == 0">
                        {{ row }} / {{ col }}
                    </template>
                    <template v-if="col % 3 == 1">
                        <input type="text" :value="row"/>
                    </template>
                    <template v-if="col % 3 == 2">
                        <select :value="row">
                            <option v-for="i in columns" :value="i">Option {{i}}</option>
                        </select>
                    </template>
                </td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Grid extends Vue {

  @Prop({default: 5}) columns!: number;
  @Prop({default: 20}) rows!: number;

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import 'styles/common';
.grid{
    width: 100%;
    height: 100%;
}
table{
    border-collapse: collapse;
    background: white;
    overflow: auto;
    height: calc(100% - 150px);
    width: 100%;
    table-layout: fixed;

    th, td{
        padding: 10px;
        border: 1px solid $border-color;
        transition: all 0.1s linear;
        font-size: 12px;
    }
    th{
        background-color: #e9e9e9;
        border-color: #d7d7d7;
        padding: 20px 10px;
    }
}
</style>
