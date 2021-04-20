import SuperChild from "./super-child";


function Child(props){
    let myVar = props.inputValue
    console.log("my var in child comp", myVar)
    return(
        <div>
            <div>child:  </div>
            <SuperChild inputValue1={myVar} />
        </div>
    )
}

export default Child;