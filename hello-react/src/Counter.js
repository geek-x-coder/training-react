import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state;

    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 : {fixedNumber}</h2>
        <button
          onClick={() => {
            this.setState((prevState, props) => {
                return {
                    number : prevState.number + 1
                };
            }, () => {
                console.log('계산 끝')
            });
            this.setState((prevState, props) => ({
                number : prevState.number + 1
            }));
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
