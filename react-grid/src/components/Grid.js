import React, { Component } from 'react';
import './Grid.scss';

export class Grid extends Component {
    render() {
        return (
            <div className="grid-builder">
                <table>
                    <thead>
                        <tr>
                            {this.createHeaderCells()}
                        </tr>
                    </thead>
                    <tbody>
                        { this.createRows() }
                    </tbody>
                </table >
            </div >
        );
    }

    createHeaderCells = () => {
        let headerCells = [];
        for (let i = 1; i <= this.props.columns; i++){
            headerCells.push(<th key={i}>Header {i}</th>)
        }
        return headerCells;
    }

    createOptionsForSelect = (i) => {
        let opts = [];
        for (let i = 1; i <= this.props.columns; i++){
            opts.push(<option key={i} value={i}>Option {i}</option>)
        }
        return opts;
    }

    createRowCellContent = (row, col) => {
        if (col % 3 == 0){
            return `${row}/${col}`;
        }
        if (col % 3 == 1){
            return <input type="text" value={row}></input>;
        }
        if (col % 3 == 2){
            return <select value={row}>{this.createOptionsForSelect(col)}</select>;
        }
    }
    
    createRowCells = (row) => {
        let rowCells = [];
        for (let i = 1; i <= this.props.columns; i++){
            rowCells.push(<td key={i}>{this.createRowCellContent(row, i)}</td>)
        }
        return rowCells;
    }

    createRows = () => {
        let rows = [];
        console.log(this.props);
        for (let i = 1; i <= this.props.rows; i++){
            rows.push(<tr key={i}>{this.createRowCells(i)}</tr>)
        }
        return rows;
    }

}

export default Grid;