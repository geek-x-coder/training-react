import React from "react";
import TodoItem from "./TodoItem";

const Todos = ({
  todos,
  input,
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
}) => {
  function onSubmit(e) {
    e.preventDefault();
    onInsert(input);
    onChangeInput("");
  }

  function onChange(e) {
    onChangeInput(e.target.value);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={input} onChange={onChange} />
        <button type="submit">추가</button>
      </form>
      <div>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  );
};

export default Todos;
