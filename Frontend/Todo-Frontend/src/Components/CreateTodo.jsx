import React from 'react'
import { useState } from 'react';

import { memo } from 'react';

export  function CreateTodo(){
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    function setTheTitle(e){
        setTitle(e.target.value);
    }
    function submitHandler(){
        fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "Content-type": "application/json"
                }
            })
                .then(async function(res) {
                    const json = await res.json();
                    alert("Todo added");
                })
    }
    return (
        <>
        <input id="title" type="text" placeholder='Enter title'style={{
            padding: 10,
            margin: 10
        }} onChange={e=>setTheTitle(e)}/><br/>
        <input type="text" placeholder='Enter description'style={{
            padding: 10,
            margin: 10
        }} onChange={function(e){
            setDescription(e.target.value)
        }}/><br/>
        <button style={{
            padding: 10,
            marginLeft: 60,
            marginTop:10
        }} onClick={submitHandler}>Save</button>
        </>
    )
}
