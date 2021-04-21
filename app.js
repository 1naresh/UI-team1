


// import { Button} from 'react-buttons';
 
import Child from "./child"

import "./app.css" 
import { useState } from "react"
import MyComp from "./comp-cls"

const App = () =>{
    const valueState = useState("mark")
    const value = valueState[0]
    const setValue = valueState[1]

    
    // let name = "mark"
    const dosome = (e) =>{
        console.log("input is changed",e.target.value)
        setValue(e.target.value + "a")
        // let resObj = {...value}
        // resObj.b = 89

        // setValue(resObj)
    }
    console.log("app is re rendering",value)

    return(
        <div>
            <MyComp prop1={78} />
            {/* <button onMouseOver={dosome} >change</button> */}
            {/* <input onChange={dosome} value={value} /> */}


            {/* <div> {value.a} </div>
            <div> {value.b} </div> */}
            {/* <Child inputValue={value} />  */}
            {/* <div >{name} </div>
            <button className="my-btn" >add</button>
            <a href="https://www.npmjs.com/" >npm link</a>
            */}
            {/* <Button >Export</Button> */}
        </div>
    )
}





export default App
