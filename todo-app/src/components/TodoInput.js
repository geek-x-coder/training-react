import React, { useState } from "react";
import { MdAdd } from "react-icons/md";

const TodoInput = ({ onInsert }) => {
  const [value, setValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(value);
    setValue("");
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form className="TodoInput" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요."
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInput;
