import React, { Component } from 'react'

class Constractor extends Component{
    
    constructor(props){
        super(props)

        this.state ={
            data: 'www.javascript.com'
        }
    this.handleEvent = this.handleEvent.bind(this)
    }
    handleEvent(){
        console.log(this.props)
    }
    render(){
        return(
            <div>
                <h2>React Constractor Example</h2>
                <input type="text" value={this.state.data} />
                <button onClick={this.handleEvent}>Please Click</button>
            </div>
        );
    }

}
export default Constractor;