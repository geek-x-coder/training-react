import React, { useCallback } from "react";
import Counter from "../components/Counter";
// import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { decrease, increase } from "../modules/counter";

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();

  const onIncrease = useCallback(() => {
    dispatch(increase());
  }, [dispatch]);

  const onDecrease = useCallback(() => {
    dispatch(decrease());
  }, [dispatch]);

  return (
    <div>
      <Counter
        number={number}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
      />
    </div>
  );
};

// export default connect(
//   (state) => ({
//     number: state.counter.number,
//   }),
//   { increase, decrease }
// )(CounterContainer);

export default CounterContainer;
