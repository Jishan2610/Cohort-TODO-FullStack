import {React} from "react";
import Todo from "./Todo";
import { memo } from "react";
export default function Todos({todos}){
   

    return (
        <>
        {todos.map((todo,ind)=>
            <Todo key={ind} title={todo.title} description={todo.description} completed={todo.completed} id={todo._id}/>
        )}
        </>
    )
}
