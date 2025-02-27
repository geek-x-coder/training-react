import {produce} from 'immer';

const todos_changeInput = "todos_changeInput";
const todos_insert = "todos_insert";
const todos_toggle = "todos_toggle";
const todos_remove = "todos_remove";

export const changeInput = (input) => ({type:todos_changeInput, input});

let id = 3;
export const insert = (text) => ({
    type : todos_insert,
    todo : {
        id : id++,
        text,
        done : false 
    }
})

export const toggle = (id) => ({
    type:todos_toggle,
    id
})

export const remove = (id) => ({
    type : todos_remove,
    id
})

const initialState = {
    input : '',
    todos : [
        {
            id : 1,
            text : '리액트를 공부하세요',
            done : true
        },
        {
            id : 2,
            text : '리덕스를 공부하세요',
            done : false
        }
    ]
}

const todos = (state=initialState, action) => {
    switch(action.type) {
        case todos_changeInput:
            return produce(state, (draft) => {
                draft.input = action.input;
            })
        case todos_insert:
            return produce(state, (draft) => {
                draft.todos = draft.todos.concat(action.todo);
            })
        case todos_toggle:
            return produce(state, (draft) => {
                draft.todos = draft.todos.map(todo => todo.id === action.id ? {...todo, done: !todo.done} : todo)
            })
        case todos_remove:
            return produce(state, (draft) => {
                draft.todos = draft.todos.filter(todo => todo.id !== action.id);
            })
        default :
            return state;
    }

}

export default todos;

