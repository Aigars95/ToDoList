import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import ToDoRow from './components/ToDoRow/ToDoRow';
import EditWindow from './components/EditWindow/EditWindow';

type todoListType = {
  task: string;
  completed: boolean;
}

const App = () => {
  const [showEditWindow, setShowEditWindow] = useState(false);
  const [showDoneTask, setShowDoneTask] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [todoList, setToDOList] = useState<todoListType[]>([]);
  const clickHandler = () => {
    setToDOList([...todoList, { task: inputValue, completed: false }]);
    setInputValue('');
  };
  const closeClickHandler = (rowIndex: number) => {
    const newToDOList = todoList.filter((item, index) => index !== rowIndex);
    setToDOList(newToDOList);
  };
  const completeHandler = (rowIndex: number, finished: boolean) => {
    const newToDOList = todoList.map(({ task, completed }, index) => {
      if (index === rowIndex) {
        return { task, completed: finished };
      }
      return { task, completed };
    });
    setToDOList(newToDOList);
  };
  const showDoneHandler = () => {
    setShowDoneTask(!showDoneTask);
  };
  const taskToShow = todoList.filter((item) => {
    if (showDoneTask) {
      return item.completed;
    }
    return true;
  });

  const openEditWindow = () => {
    setShowEditWindow(!showEditWindow);
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="heading1">To Do List</h1>
        <div className="input--wrapper">
          <input
            id="input__todo"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={clickHandler}>add</button>
          <button onClick={showDoneHandler}>show done</button>
        </div>
        {taskToShow.map((item, index) => (
          <ToDoRow
            rowIndex={index}
            toDoClose={closeClickHandler}
            toDoText={item.task}
            toDoCompleted={completeHandler}
            completed={item.completed}
            editTask={openEditWindow}
          />
        ))}
      </div>
      {showEditWindow && <EditWindow />}
    </div>
  );
};
export default App;
