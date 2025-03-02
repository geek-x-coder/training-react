import { createAction, handleActions } from "redux-actions";

const counter_increase = "counter_increase";
const counter_decrease = "counter_decrease";

export const increase = createAction(counter_increase);
export const decrease = createAction(counter_decrease);

const initialState = {
  number: 0,
};

const counter = handleActions(
  {
    [counter_increase]: (state, action) => ({ number: state.number + 1 }),
    [counter_decrease]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState
);

export default counter;
