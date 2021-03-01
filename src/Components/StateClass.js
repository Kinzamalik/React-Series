import React, { Component } from 'react'

export class StateClass extends Component {
    constructor(){
        super();
        this.state = {
            data: 'Kinzay'
        }
    }

    change(){
        this.setState({ data: "shanzay" });
    }


    render() {
        return (
            <div>
                <h1>{this.state.data}</h1>
                <button onClick={()=> this.change()}>Update</button>
            </div>
        )
    }
}

export default StateClass
