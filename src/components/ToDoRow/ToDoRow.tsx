import React, { useEffect, useState } from 'react';
import './ToDoRow.scss';

type ToDoRowProps = {
  rowIndex: number;
  toDoText: string;
  toDoClose: (rowIndex:number) => void;
  toDoCompleted: (rowIndex: number, completed: boolean) => void;
  completed: boolean;
  editTask: (rowIndex: number) => void;
  priorityColor: string;
}

const ToDoRow = ({
  rowIndex, toDoText, toDoClose, toDoCompleted, completed, editTask, priorityColor,
}:ToDoRowProps) => (
  <div
    className={completed ? 'task task__finished' : 'task'}
    style={{ backgroundColor: completed ? 'gray' : `${priorityColor}` }}
  >
    <input
      type="checkbox"
      checked={completed}
      onChange={(e) => toDoCompleted(rowIndex, e.target.checked)}
    />
    <span className="list__text">{toDoText}</span>

    <button onClick={() => editTask(rowIndex)}>Edit</button>

    <span onClick={() => toDoClose(rowIndex)} className="list_cross">X</span>

  </div>
);
export default ToDoRow;
