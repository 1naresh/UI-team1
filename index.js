


import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Comp1 from './basics/comp1';
import Comp2 from './basics/comp2';
import Form from './basics/form';

function App(){
    let  [ show,setShow ] = useState(true)
    let result = useState("mark")
    let sname = result[0]
    let setsName = result[1]
    const change = () =>{
        setsName("steve")
    }
    const hide = () =>{
        setShow(false)
    }
    return(
        <div>
            <div style={{float:"left",width:"40%",height:"200px",border:"1px solid black"}} >
                { show && <Comp1 prop1={sname} />}
            </div>
            <div style={{float:"left",width:"40%",height:"200px",border:"1px solid black"}} >
                { show && <Comp2 prop1={sname} />}
            </div>
            <button onClick={change} >
                change
            </button>
            <button onClick={hide} >
                hide
            </button>
        </div>
    )
}

ReactDOM.render( <Form /> ,document.getElementById('root')); 


// jsx new data type