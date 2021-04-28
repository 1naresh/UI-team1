


import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Comp1 from './basics/comp1';
import Comp2 from './basics/comp2';

function App(){
    let result = useState("mark")
    let sname = result[0]
    let setsName = result[1]
    const change = () =>{
        setsName("steve")
    }
    return(
        <div>
            <div style={{float:"left",width:"40%",height:"200px",border:"1px solid black"}} >
                <Comp1 prop1={sname} />
            </div>
            <div style={{float:"left",width:"40%",height:"200px",border:"1px solid black"}} >
                <Comp2 prop1={sname} />
            </div>
            {/* <button onClick={change} >
                change
            </button> */}
        </div>
    )
}

ReactDOM.render( <App /> ,document.getElementById('root')); 


// jsx new data type