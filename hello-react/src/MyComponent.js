import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
  render() {
    const { name, favoritNumber, children } = this.props;
    return (
      <div>
        안녕하세요. 제 이름은 {name}입니다. <br />
        children 값은 {children}입니다.
        <br />
        제가 좋아하는 숫자는 {favoritNumber}입니다.
      </div>
    );
  }
}

MyComponent.propTypes = {
  name: PropTypes.string,
  favoritNumber: PropTypes.number.isRequired,
};

export default MyComponent;
