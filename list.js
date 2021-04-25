import { useState } from "react"


const List = props =>{
    const result = useState([
        {key:"a",age:12},
        {key:"b",age:13},
        {key:"c",age:23},
        {key:"d",age:2},
        {key:"e",age:89},
    ])
    let arr = result[0]
    let setArr = result[1]
    const add = () =>{
        let newArr = [...arr]
        // newArr.push({key:"c",age:newArr.length})
        // newArr.shift()
        // newArr.pop()

        newArr = newArr.filter(function(item){
            return item.age < 15
        })

        setArr(newArr)
    }
    console.log("re render",arr)

    // let arr = [
    //     {key:"a",age:12},
    //     {key:"b",age:13},
    // ]
    return(
        <div style={{margin:"100px"}} >
            {
                arr.map(function(item){
                    return(
                        <div key={item.age} > 
                            {item.key}  : {item.age} 
                        </div>
                    )
                })
            }
            { arr.length === 0 && <div> arr is empty </div> }
            <button onClick={add} >add</button>
        </div>
    )
}

export default List;