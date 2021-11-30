import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setToDOList] = useState<string[]>([]);
  const clickHandler = () => {
    setToDOList([...todoList, inputValue]);
  };
  return (
    <div className="App">
      <h1>To Do List</h1>
      <input
        id="input__todo"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={clickHandler}>add</button>

    </div>
  );
};
export default App;
