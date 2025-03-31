import React from "react";
import cn from "classnames";
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdOutlineRemoveCircle,
} from "react-icons/md";

const TodoItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo;

  return (
    <div>
      <div className={cn("checkbox", checked)} onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdOutlineRemoveCircle />
      </div>
    </div>
  );
};

export default TodoItem;
