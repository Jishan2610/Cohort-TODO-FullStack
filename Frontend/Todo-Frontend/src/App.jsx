import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from './Components/Todos'
import  {CreateTodo}  from './Components/CreateTodo'

function App() {
  let [todos,setTodos]=useState([])
    useEffect(()=>{
        try{
        fetch("http://localhost:3000/todos")
        .then(res=>res.json())
        .then(todoss=>{
            console.log(todoss);
            setTodos(todoss.todos)})
        }catch(e){
            console.error(error.message);
        }
    },[])
  return (
    
    <>
    <CreateTodo/>
      <Todos todos={todos}/>
       
    </>
  )
}

export default App
