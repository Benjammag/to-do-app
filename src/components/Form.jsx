import { useState } from "react";
import styles from './form.module.css'

export default function Form({todos, setTodos}) {
 const [todo,setTodo] = useState({name:"", done:false});
 function handleSubmit(e) {
  e.preventDefault();
  setTodos([...todos, todo]);
  setTodo({name:"", done:false});
 }
 return (
  <form className={styles.todoForm} onSubmit={handleSubmit}>
   <div className={styles.container}>
    <input 
    className={styles.input}
    onChange={(e) => setTodo({name:e.target.value, done: false})} value ={todo.name} type="text" placeholder="Enter todo item......"
    />
   <button className={styles.button}>Add</button>
   </div>
  </form>
 );
}