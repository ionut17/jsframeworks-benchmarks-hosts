import React, { Component } from 'react';
import { Grid as GridBuilder } from '../components/Grid';

export class Grid extends Component {

    constructor(){
        super();
        this.state = {
            rows: 100,
            columns: 10
        };
    }

    render() {
        return (
            <div id="grid">
                <h1>Grid: { this.state.rows } rows, { this.state.columns } columns</h1>
                <button onClick={()=>this.addRows(1000)}>Add 1000 rows</button>
                <button onClick={()=>this.removeRows(1000)}>Remove 1000 rows</button>
                <button onClick={()=>this.addRows(10000)}>Add 10,000 rows</button>
                <button onClick={()=>this.removeRows(10000)}>Remove 10,000 rows</button>
                <button onClick={()=>this.clearRows()}>Clear rows</button>
                <GridBuilder rows={this.state.rows} columns={this.state.columns}></GridBuilder>
            </div >
        );
    }

    addRows(count) {
        this.setState({ rows: this.state.rows + count })
    }

    removeRows(count) {
        this.setState({ rows: this.state.rows > count ? this.state.rows - count : this.state.rows })
    }

    clearRows() {
        this.setState({ rows: 0 })
    }
}

export default Grid;