import React from 'react';
import './App.css';

const App = () => {
  const name = '리액트';

  return <div className="react">{name || 'undefined입니다.'}</div>;
};

export default App;
