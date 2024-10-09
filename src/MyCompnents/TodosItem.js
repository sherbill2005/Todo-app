import React from 'react'
import Button from 'react-bootstrap/Button';
import './todosItem.css'

export default function TodosItem({todos, onDelete  }) {
  return (
    <div>
    <h4 className='title'>
      {todos.id}.  {todos.title}   
    </h4>
    <p>  {todos.desc}</p>
    
    <Button className='btn' variant="danger"  onClick={()=>onDelete(todos)}>Delete</Button>
    </div>
  )
}
