import { useState } from "react"


const Comp2 = props =>{
    let [age,setAge] = useState(23)
    let [show,setShow] = useState(false)
    let [items,setItems] = useState(["a","b","c"])


    // let result = useState(23)
    // let age = result[0]
    // let setAge = result[1]

    const change = (e) =>{
        setAge(24)
        setShow(true)

        let newItems = [...items]
        newItems.push("d")
        setItems(newItems)

    
    }
    return(
        <div>
            <h1>func</h1>
            {
                items.map(item=>{
                    return(
                        <div>{item} </div>
                    )
                })
            }
            <div> {age} </div>
            {show && <div> hidden </div> }
            <button onClick={change} >
                change state
            </button>
        </div>
    )
}

export default Comp2