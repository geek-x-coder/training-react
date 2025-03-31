import React, { useRef, useState } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "리액트를 공부하세요.",
      checked: true,
    },
    {
      id: 2,
      text: "리덕스를 공부하세요.",
      checked: true,
    },
    {
      id: 3,
      text: "전부 공부하세요.",
      checked: false,
    },
  ]);

  const nextId = useRef(4);

  const onInsert = (text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };

    setTodos(todos.concat(todo));
    nextId.current = nextId.current + 1;
  };

  const onRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  return (
    <TodoTemplate>
      <TodoInput onInsert={onInsert}/>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </TodoTemplate>
  );
};

export default App;
