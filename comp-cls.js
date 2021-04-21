
import React from "react";
import Child from "./child";

class MyComp extends React.Component{
    state = {
        var1: 1
    }
    dosome = e =>{
        this.setState(function(prevState){
            return {var1: prevState.var1 + 1 }
        })
    }
    render(){
        console.log(this.state)
        return(
            <div>
                <div>MyComp content {this.state.var1}</div>
                <button onClick={this.dosome} >change</button>
            </div>
        )
    }
}

export default MyComp














