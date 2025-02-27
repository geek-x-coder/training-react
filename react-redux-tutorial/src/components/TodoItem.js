import React from "react";

const TodoItem = ({ todo, input, onToggle, onRemove }) => {

  return (
    <div>
      <input
        type="checkbox"
        readOnly={true}
        value={input}
        onClick={() => onToggle(todo.id)}
      />
      <span
        style={{
          textDecoration: todo.done ? "line-through" : "none",
        }}
      >
        {todo.text}
      </span>
      <button onClick={() => onRemove(todo.id)}>삭제</button>
    </div>
  );
};

export default TodoItem;
