import { useState } from "react";

const CDcomp = props =>{
    let result = useState(true)
    let myVar = result[0]
    let setMyVar = result[1]

    const handleShow = () =>{
        setMyVar(false)
        // setMyVar(!myVar)
    }
    console.log("component is re rendering",myVar)
    return(
        <div>
            <button onClick={handleShow} > show hidden content  </button>
            {myVar && <div> below </div> }
        </div>
    )
}

export default CDcomp;


