import React from "react";

const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <div>
      <input
        type="checkbox"
        readOnly={true}
        checked={todo.done}
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
