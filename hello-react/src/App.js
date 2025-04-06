import React, { Component } from 'react';
import ScrollBox from './ScrollBox';
import IterationSample from './IterationSample';

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => this.scrollBox = ref}/>
        <button onClick={() => this.scrollBox.scrollToBottom()}>스크롤 밑으로</button>

        <hr/>

        <IterationSample/>
      </div>
    );
  }
}

export default App;