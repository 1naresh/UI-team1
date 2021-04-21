

import { useState } from "react"

const StateComp = props =>{
    // var result = useState(1)
    // let val = result[0]
    // let setVal = result[1]

    // let result2 = useState("mark")
    // let name = result2[0]
    // let setName = result2[1]

    let result3 = useState({key1:2,key2:"steve"})
    let obj = result3[0]
    let setObj = result3[1]


    const dosome = () =>{
        // setVal(2)
        // setName("steve")
        setObj({key1:87,key2:"mark"})
    }
    return(
        <div>
            {/* hello {val} */}
            <button onClick={dosome} > change</button>
            {/* {name}  */}
            : {obj.key1} : {obj.key2}
        </div>
    )
}

export default StateComp


