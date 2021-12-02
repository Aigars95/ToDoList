import React, { useState } from 'react';
import './EditWindow.scss';
import TodoForm from '../TodoForm/TodoForm';

type EditWindowProps = {
  task: string;
  taskID: number;
  taskPriority: number;
  getNewTask: (newTask: string, taskID: number, newTaskPriority: number) => void
}

const EditWindow = ({
  task, taskID, taskPriority, getNewTask,
}: EditWindowProps) => {
  const clickHandler = (taskText: string, newTaskPriority: number) => {
    getNewTask(taskText, taskID, newTaskPriority);
  };
  return (
    <div
      className="popup--wrapper"
    >
      <div className="popup">
        <h1>Edit task</h1>
        <TodoForm
          initialValue={task}
          initialPriority={taskPriority}
          todoFormInputs={clickHandler}
        />
      </div>
    </div>
  );
};

export default EditWindow;
