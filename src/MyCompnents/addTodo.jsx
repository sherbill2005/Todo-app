import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './addTodo.css'


export default function AddTodo(props) {
    const [newTodo, setNewtodo] = useState({title: "", desc:"" });
    const submit = (e)=> {
      e.preventDefault();
      if (newTodo.title && newTodo.desc){
        const newid = props.todos.length > 0 ? props.todos[props.todos.length -1].id +1 : 1;
        props.addTodo({id: newid, title: newTodo.title, desc: newTodo.desc})
        setNewtodo({title:"", desc:""})
      }
    }
      const handleChange = (e)=>{
        const { name, value } = e.target;
        setNewtodo({...newTodo, [name]: value });
      };


  return (
    <div className='container'>
    <Form onSubmit={submit}>
        
      <Form.Group className="mb-3" id="title">
        <Form.Label>Add todo</Form.Label>
        <Form.Control className='titleInput' name='title' value={newTodo.title} type="text" placeholder="title" onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" id="desc">
        <Form.Label>add description</Form.Label>
        <Form.Control as="textarea" name='desc' value={newTodo.desc} type='text' rows={2} onChange={handleChange}/>
      </Form.Group>
    
    <Button variant="primary" type="submit">
      Submit
    </Button>
    </Form>
    </div>
  )
}

