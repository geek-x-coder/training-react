import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
  state = {
    password: '',
    checked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleButtonClick = () => {
    this.setState({
      checked: true,
      validated: this.state.password === '0000',
    });
    this.input.focus();
  };

  render() {
    const { password, checked, validated } = this.state;

    return (
      <div>
        <input
          type="password"
          value={password}
          ref={(ref) => (this.input = ref)}
          onChange={this.handleChange}
          className={checked ? (validated ? 'success' : 'failure') : ''}
        />
        <button onClick={this.handleButtonClick}>확인하기</button>
      </div>
    );
  }
}

export default ValidationSample;
