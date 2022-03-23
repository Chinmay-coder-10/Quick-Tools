import React, { useState, useEffect } from 'react';
import { AddTodo } from "./AddTodo"
// import Preloading from './Preloading';
import { Todos } from "./Todos"

const Notes = (props) => {
  let initTodo;
  props.setProgress(100)
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }


  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));

  }

  const addTodo = (title, desc) => {
    props.setProgress(0);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    props.setProgress(100)
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <div id="bar"></div>
      <AddTodo addTodo={addTodo} />
      <Todos key={""} todos={todos} onDelete={onDelete} />
    </>

  )

}

export default Notes;
