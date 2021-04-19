


// import { Button} from 'react-buttons';
 
import Child from "./child"

import "./app.css" 

const App = () =>{
    let name = "mark"
    return(
        <div>
            <div  >{name} </div>
            <button className="my-btn" >add</button>
            <a href="https://www.npmjs.com/" >npm link</a>
            <Child prop1={name} studentId={34} />
            {/* <Button >Export</Button> */}
        </div>
    )
}





export default App
