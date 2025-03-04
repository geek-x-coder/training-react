import { createAction, handleActions } from "redux-actions";

const counter_increase = "counter_increase";
const counter_decrease = "counter_decrease";

export const increase = createAction(counter_increase);
export const decrease = createAction(counter_decrease);

// 1초 뒤에 increase 혹은 decrease 함수를 디스패치함
export const increaseAsync = () => (dispatch) => {
    setTimeout(() => {
        dispatch(increase());
    })
}

export const decreaseAsync = () => (dispatch) => {
    setTimeout(() => {
        dispatch(decrease());
    })
}

const initialState = {
  number: 0,
};

const counter = handleActions(
  {
    [counter_increase]: (state) => ({ number: state.number + 1 }),
    [counter_decrease]: (state) => ({ number: state.number - 1 }),
  },
  initialState
);

export default counter;
