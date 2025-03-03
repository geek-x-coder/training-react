import React from "react";
import Todos from "../components/Todos";
// import { connect } from "react-redux";
import { changeInput, insert, remove, toggle } from "../modules/todos";
import { useSelector } from "react-redux";
import useActions from "../lib/useActions";

const TodosContainer = () => {
  const { input, todos } = useSelector(({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }));

  const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
    [changeInput, insert, toggle, remove],
    []
  );

  return (
    <div>
      <Todos
        input={input}
        todos={todos}
        onChangeInput={onChangeInput}
        onInsert={onInsert}
        onToggle={onToggle}
        onRemove={onRemove}
      />
    </div>
  );
};

export default React.memo(TodosContainer);

// const mapStateToProps = (state) => ({
//   input: state.todos.input,
//   todos: state.todos.todos,
// });

// const mapDispatchToProps = (dispatch) => ({
//   changeInput: (input) => dispatch(changeInput(input)),
//   insert: (text) => dispatch(insert(text)),
//   toggle: (id) => dispatch(toggle(id)),
//   remove: (id) => dispatch(remove(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);

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
