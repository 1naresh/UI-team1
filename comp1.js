

import React from "react";

class Comp1 extends React.Component{
    state = {
        age : 0,
        marks : 0,
        show:false,
        items : ["a","b","c"],
        obj:{a:1,b:2}
    }
    componentDidMount(){
    }
    change = (e) =>{
        // let newItems = [...this.state.items]
        // newItems.push("d")
        // this.setState({items:newItems})
        let newObj = {...this.state.obj}
        newObj.c = 3
        this.setState({obj:newObj})
    }
    render(){
        return(
            <div>
                <h1>class</h1>
                <div> {this.state.obj.a} </div>
                <div> {this.state.obj.b} </div>
                <div> {this.state.obj.c} </div>
                {
                    this.state.items.map(item=>{
                        return(
                            <div>{item} </div>
                        )
                    })
                }
                {/* <div> {this.state.age} </div> */}
                {/* <div> {this.state.marks} </div> */}
                { this.state.show && <div>hidden</div> }
                <button onClick={this.change} >
                    change state
                </button>
            </div>
        )
    }
}

export default Comp1;