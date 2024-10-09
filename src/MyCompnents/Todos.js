import React from 'react'
import TodosItem from './TodosItem'



export default function Todos(props) {
  const onDelete = (todo) =>{
    console.log('i am ondelete', todo)  

    props.setTodo(props.todos.filter((e)=>{
      return e.id !==todo.id;
  }));
  }
  
  return (
    <div className="Container">
    <h2 >My Todos</h2> 

    {props.todos.length === 0 ? <h4>"no todos to display"</h4>:  
    props.todos.map((todos)=>{
      return  <TodosItem  todos = {todos} key={todos.id} onDelete={onDelete}/>
    })}

    

    </div>
  ) 
}
