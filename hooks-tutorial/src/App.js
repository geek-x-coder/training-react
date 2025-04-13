import React, { useState } from 'react';
// import Counter from './Counter';
import Info from './Info';

const App = () => {

  const [visible, setVisible] = useState(true);

  const onClick = () => {
    setVisible(!visible);
  }

  return (
    <div>
      <button onClick={onClick}>
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr/>
      {visible && <Info/>}
    </div>
  );
};

export default App;