

import { useState } from "react"

const Form = props =>{
    const [ username,setUsername ] = useState("")
    const [ password,setPassword ] = useState("")
    const [ isLoggedIn,setIsloggedIn ] = useState(false)
    const nameChange = e =>{
        setUsername(e.target.value)
    }
    const pwdChange = e =>{
        setPassword(e.target.value)
    }
    const login = e =>{
        if(username.length < 6){
            console.log("username must be 6 letters")
            return 
        }
        if( username === "999999" && password === "123"){
            setIsloggedIn(true)
        }
    }
    return(
        <div>
            { !isLoggedIn && <div>
                <div>
                    usaername : 
                    <input value={username} onChange={nameChange} type="number" />
                </div>
                <div>
                    password : 
                    <input value={password} onChange={pwdChange}  />
                </div>
                <button onClick={login} >login</button>
            </div>}
            { isLoggedIn && <div> user logged in successfully </div> }
            <div>temp</div>
        </div>
    )
}

export default Form