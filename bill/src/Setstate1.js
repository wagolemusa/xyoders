import React, { Component } from 'react'
// import PropTypes from 'prop  -type'

class Setstate1 extends Component{
    constructor(){
        super();
        this.state = {
            msg: "Welcome to javaTpont"
        };
        this.updateSetState = this.updateSetState.bind(this);
    }
    updateSetState(){
        this.setState({
            msg:"Its a best React.js tutorial"
        });
    }

    render(){
        return(
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={this.updateSetState}>SET STATE</button>
            </div>
        )
    }
 
}
export default Setstate1