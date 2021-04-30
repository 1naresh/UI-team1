

import React from "react";

class Comp1 extends React.Component{

    shouldComponentUpdate(prevProps,prevState){
        // console.log(" class shouldComponentUpdate")
        return true
    }
    componentDidUpdate(){
        // console.log(" class componentDidUpdate")
    }

    componentWillUnmount(){
        // console.log(" class componentWillUnmount")
    }

    componentDidMount(){
        // console.log(" class componentDidMount")
    }
    
    render(){
        // console.log(" class render")

        return(
            <div>
                <h1>class</h1>
                <div> {this.props.prop1} </div>
            </div>
        )
    }
}

export default Comp1;