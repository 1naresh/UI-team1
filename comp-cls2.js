

import React from "react";

class Compcls2 extends React.Component{
    state={
        age:33,
        show:false,
        arr:[3,6,2,8]
    }
    change = () =>{
        let arr = this.state.arr

        arr.push(arr[arr.length-1] + 1)

        this.setState({age:40,show:true,arr:arr})
    }
    render(){
        console.log("re rendering",this.state.age)
        return(
            <div style={{margin:'100px'}} >
                {this.state.arr.map(function(item){
                    return(
                        <div key={item} > 
                            <div>num</div>
                            <div>{item}</div>
                        </div>
                    )
                })}

                Compcls2 { this.state.age }
                <button onClick={this.change} >change</button>
                {this.state.show && <div> hidden </div>  }
            </div>
        )
    }
}

export default Compcls2;