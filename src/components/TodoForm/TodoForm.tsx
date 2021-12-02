import React, { useState } from 'react';
import './TodoForm.scss';

type TodoFormProps ={
  initialValue: string;
  initialPriority: number;
  todoFormInputs: (taskText: string, taskPriority: number) => void;
}

const TodoForm = ({ initialValue, initialPriority, todoFormInputs }:TodoFormProps) => {
  const [inputValue, setInputValue] = useState(initialValue);
  const [priorityValue, setPriorityValue] = useState(initialPriority);
  const submitHandler = () => {
    todoFormInputs(inputValue, priorityValue);
    setInputValue('');
  };

  return (
    <form
      className="todo__form"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        id="input__todo"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <select value={priorityValue} onChange={(e) => setPriorityValue(parseFloat(e.target.value))}>
        <option value={0}>Today</option>
        <option value={1}>Week</option>
        <option value={2}>Month</option>
      </select>
      <button
        type="submit"
        onClick={submitHandler}
      >
        add
      </button>
    </form>
  );
};

export default TodoForm;
