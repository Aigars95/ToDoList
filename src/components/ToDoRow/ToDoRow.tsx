import React, { useEffect, useState } from 'react';
import './ToDoRow.scss';

type ToDoRowProps = {
  rowIndex: number;
  toDoText: string;
  toDoClose: (rowIndex:number) => void;
  toDoCompleted: (rowIndex: number, completed: boolean) => void;
  completed: boolean;
  editTask: () => void;
}

const ToDoRow = ({
  rowIndex, toDoText, toDoClose, toDoCompleted, completed, editTask,
}:ToDoRowProps) => (
  <div className={completed ? 'task task__finished' : 'task'}>
    <span className="list__text">{toDoText}</span>
    <div>
      <button onClick={() => editTask()}>Edit</button>
      <input type="checkbox" onChange={(e) => toDoCompleted(rowIndex, e.target.checked)} />
      <span onClick={() => toDoClose(rowIndex)} className="list_cross">X</span>
    </div>
  </div>
);
export default ToDoRow;
