import React, { useEffect, useRef, useState } from 'react';
import './TodoForm.scss';

type TodoFormProps ={
  initialValue: string;
  initialPriority: number;
  todoFormInputs: (taskText: string, taskPriority: number) => void;
}

const TodoForm = ({ initialValue, initialPriority, todoFormInputs }:TodoFormProps) => {
  const taskInput = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState(initialValue);
  const [priorityValue, setPriorityValue] = useState(initialPriority);
  const submitHandler = () => {
    if (!inputValue) {
      return;
    }
    todoFormInputs(inputValue, priorityValue);
    setInputValue('');
  };

  useEffect(() => {
    if (taskInput.current) {
      taskInput.current.focus();
    }
  }, []);

  return (
    <form
      className="todo__form"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        className="input__task"
        id="input__todo"
        type="text"
        placeholder="Task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        ref={taskInput}
      />
      <select
        className="select__task"
        value={priorityValue}
        onChange={(e) => setPriorityValue(parseFloat(e.target.value))}
      >
        <option value={0}>Today</option>
        <option value={1}>Week</option>
        <option value={2}>Month</option>
      </select>
      <button
        className="todoForm__button"
        type="submit"
        onClick={submitHandler}
      >
        add
      </button>
    </form>
  );
};

export default TodoForm;
