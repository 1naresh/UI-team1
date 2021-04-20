

const SuperChild = props =>{
    console.log("inputValue1 prop in super child comp", props.inputValue1)
    return(
        <div>
            Super child
            <div></div>
            input value : {props.inputValue1}
        </div>
    )
}


export default SuperChild;