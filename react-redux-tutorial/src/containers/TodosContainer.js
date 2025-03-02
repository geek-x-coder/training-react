import React from "react";
import Todos from "../components/Todos";
import { connect } from "react-redux";
import { changeInput, insert, remove, toggle } from "../modules/todos";

const TodosContainer = ({
  input,
  todos,
  changeInput,
  insert,
  toggle,
  remove,
}) => {
  return (
    <div>
      <Todos
        input={input}
        todos={todos}
        onChangeInput={changeInput}
        onInsert={insert}
        onToggle={toggle}
        onRemove={remove}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  input: state.todos.input,
  todos: state.todos.todos,
});

const mapDispatchToProps = (dispatch) => ({
  changeInput: (input) => dispatch(changeInput(input)),
  insert: (text) => dispatch(insert(text)),
  toggle: (id) => dispatch(toggle(id)),
  remove: (id) => dispatch(remove(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);

// export default connect(
//   ({ todos }) => ({
//     input: todos.input,
//     todos: todos.todos,
//   }),
//   {
//     changeInput,
//     insert,
//     toggle,
//     remove,
//   }
// )(TodosContainer);
