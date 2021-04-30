import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ListItem from './listItem';
import "./todoList.css";

function TodoList() {

  let storedTodos = JSON.parse(localStorage.getItem("react.todoList.todos"));
  if (storedTodos === null) {
    storedTodos = [{id: uuidv4(), text: "Add something to the to-do list"}];
  }

  const [todos, setTodos] = useState(storedTodos);
  const [newTodo, setNewTodo] = useState("");

  

  useEffect(() => {
    setNewTodo("");
    localStorage.setItem("react.todoList.todos", JSON.stringify(todos));
  }, [todos])
  
  let deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  let todoComponents = [];
  for (let i = 0; i < todos.length; i++) {
    todoComponents.push(<ListItem key={todos[i].id} callback={deleteTodo} content={todos[i]}></ListItem>)
  }

  return (
    <div className="todoList">
      <h1>To-Do List</h1>
      <div className="todoListItems">
        {todoComponents}
      </div>
      <div className="newTodo">
        <textarea name="content" className="newTodoText" placeholder="New Todo..." value={newTodo} onChange={ev => setNewTodo(ev.target.value)}></textarea>
        <button className="newTodoButton" onClick={() => setTodos(todos => [...todos, {id: uuidv4(), text: newTodo}])} disabled={newTodo === ""}>Add</button>
      </div>
    </div>
  );
}

export default TodoList;