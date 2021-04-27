

import React from "react";

class Lcmethods extends React.Component{
    state = {
        sname : 1
    }
    componentDidMount(){
        console.log("componentDidMount is executing")
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate is executing")
        return true
    }
    componentDidUpdate(){
        console.log("componentDidUpdate is executing")
    }
    componentWillUnmount(){
        console.log("componentWillUnmount is executing")
    }
    change = () =>{
        this.setState({sname:this.state.sname + 1})
    }
    render(){
        console.log("render is executing")
        return(
            <div>
                hello
                <div> {this.state.sname} </div>
                <button onClick={this.change} >change</button>
            </div>
        )
    }
}

export default Lcmethods;