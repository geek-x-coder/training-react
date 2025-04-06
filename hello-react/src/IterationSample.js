import React, { useState } from 'react';

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, name: '눈사람' },
    { id: 2, name: '얼음' },
    { id: 3, name: '물' },
    { id: 4, name: '바람' },
  ]);

  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const onClick = () => {
    const newName = {
      id: nextId,
      name: inputText,
    };
    setNames(names.concat(newName));
    setNextId(nextId + 1);
    setInputText('');
  };

  const onRemove = (id) => {
    setNames(names.filter((name) => name.id !== id));
  };

  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.name}
    </li>
  ));

  return (
    <div>
      <input type="text" value={inputText} onChange={onChange}></input>
      <button onClick={onClick}>추가</button>
      <div>{nameList}</div>
    </div>
  );
};

export default IterationSample;
