const counter_increase = "counter_increase";
const counter_decrease = "counter_decrease";

export const increase = () => ({ type: counter_increase });
export const decrease = () => ({ type: counter_decrease });

const initialState = {
  number: 0,
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case counter_increase:
      return {
        number: state.number + 1,
      };
    case counter_decrease:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
};

export default counter;