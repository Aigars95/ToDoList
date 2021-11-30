import React, { useState } from 'react';
import './EditWindow.scss';

const EditWindow = () => {
  const [inputValue, setInputValue] = useState('');
  const clickHandler = () => {

  };
  return (
    <div className="popup--wrapper">
      <div className="popup">
        <h1>Edit task</h1>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={clickHandler}>Edit task</button>
      </div>
    </div>
  );
};

export default EditWindow;
