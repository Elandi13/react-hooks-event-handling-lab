// Code Keypad Component Here
import React from "react"

function Keypad(){

    function handleChage(){
        console.log('Entering password...')
    }

    return(
        <input type="password" onChange={handleChage} />
    )
}










export default Keypad