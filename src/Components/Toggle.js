import React, { Component } from 'react'

class Toggle extends Component {
    constructor(){
        super();
        this.state ={
            show:true
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.show ?
                    <h1>Hide and Show</h1> 
                    :null
                }
                <button onClick={()=>{this.setState({show:!this.state.show})}}>Click to change</button>
            </div>
        )
    }
}

export default Toggle;
