


import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Lcmethods from "./basics/lc-methods1";

function App(){
    let result = useState(true)
    let show = result[0]
    let setShow = result[1]
    console.log("parent is rendering")
    return(
        <div>
            parent
            <button onClick={()=> setShow(false) } >hide</button>
            { show && <Lcmethods />}
            
        </div>
    )
}

ReactDOM.render( <App /> ,document.getElementById('root')); 


// jsx new data type