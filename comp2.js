

import { useState,useEffect } from "react"
import "./app.css"

const Comp2 = props =>{
    useEffect(()=>{
        console.log(" func componentDidMount")
        return () =>{
            console.log(" func componentWillUnmount")
        }
    },[])

    useEffect(()=>{
        console.log(" func componentDidUpdate")
    })

    console.log(" func render")
    return(
        <div>
            <h1>func</h1>
            <div className="text-center" > {props.prop1} </div>
        </div>
    )
}

export default Comp2