import React, { Component } from 'react';
import './Forms.scss';

export class Forms extends Component {

    constructor(){
        super();
        this.state = {
            count: 100
        }
    }

    render() {
        return (
            <div id="forms">
                <h1>This is a forms page</h1>
                <form className="forms-wrapper">
                    {this.createInputs()}
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }

    generateSelectOptons = () => {
        let opts = [];
        opts.push(<option hidden value="">Placeholder</option>);
        for ( let i = 1; i <= this.state.count; i++){
            opts.push(<option value={i}>Value {i}</option>);
        }
        return opts;
    }

    createInputs = () => {
        let inputs = [];
        for ( let i = 1; i <= this.state.count; i++ ){
            inputs.push(
                <React.Fragment>
                    <input type="text" placeholder={'Input '+i} readOnly/>
                    <select readOnly>{this.generateSelectOptons()}</select>
                </React.Fragment>
            );
        }
        return inputs;
    }
}

export default Forms;