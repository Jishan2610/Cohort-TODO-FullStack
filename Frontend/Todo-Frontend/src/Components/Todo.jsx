import React from "react";
import { memo } from "react";
import { useState } from "react";


export default function Todo({title,description, completed,id}){
    const [complete,setComplete]=useState(completed)
    function completeHandler(){
        fetch(`http://localhost:3000/completed`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id:id })
        })
            .then(response => response.json())
            .then(updatedTodo => {
                // Update the state with the new todo list
                console.log(updatedTodo)
                setComplete(true);
            });
    }
    
    return (
        <>
        <h1>{title}</h1>
        <h4>{description}</h4>
        <button onClick={completeHandler}>{!complete?"Mark as complete":"Completed"}</button>
        <hr/>
        </>
    )
}