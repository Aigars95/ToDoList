import React, { useState } from 'react';
import './App.scss';
import ToDoRow from './components/ToDoRow/ToDoRow';
import EditWindow from './components/EditWindow/EditWindow';
import TodoForm from './components/TodoForm/TodoForm';

type todoListType = {
  taskID: number;
  task: string;
  completed: boolean;
  priority: number;
}

type editTaskType = {
  task: string;
  taskID: number;
  taskPriority: number;
}

const priorityColors = ['#28a745', '#007bff', '#dc3545'];

const App = () => {
  const [showDoneTask, setShowDoneTask] = useState(false);
  const [showTasksByPriority, setShowTasksByPriority] = useState(-1);
  const [showEditWindow, setShowEditWindow] = useState(false);

  const [todoList, setToDOList] = useState<todoListType[]>([]);

  const [editValue, setEditValue] = useState<editTaskType>({ task: '', taskID: -1, taskPriority: 0 });

  const addTaskHandler = (taskText:string, taskPriority: number) => {
    setToDOList([...todoList, {
      taskID: Math.floor(Math.random() * 10000),
      task: taskText,
      completed: false,
      priority: taskPriority,
    }]);
  };
  const removeTaskHandler = (rowIndex: number) => {
    const newToDOList = todoList.filter((item, index) => item.taskID !== rowIndex);
    setToDOList(newToDOList);
  };

  const completeHandler = (rowIndex: number, finished: boolean) => {
    const newToDOList = todoList.map(({
      taskID, task, completed, priority,
    }) => {
      if (taskID === rowIndex) {
        return {
          taskID, task, completed: finished, priority,
        };
      }
      return {
        taskID, task, completed, priority,
      };
    });
    setToDOList(newToDOList);
  };

  const showDoneHandler = () => {
    setShowDoneTask(!showDoneTask);
  };

  const openEditWindow = (rowIndex: number) => {
    setShowEditWindow(!showEditWindow);
    todoList.forEach((item) => {
      if (item.taskID === rowIndex) {
        setEditValue({ task: item.task, taskID: rowIndex, taskPriority: item.priority });
      }
    });
  };

  const updateTask = (newTask: string, todoID: number, newPriority: number) => {
    const newTodoList = todoList.map(({
      taskID, task, completed, priority,
    }) => {
      if (todoID === taskID) {
        return {
          taskID, task: newTask, completed, priority: newPriority,
        };
      }
      return {
        taskID, task, completed, priority,
      };
    });
    setToDOList(newTodoList);
    setShowEditWindow(!showEditWindow);
  };

  let tasksToShow = todoList.filter((item) => {
    if (showDoneTask) {
      return item.completed;
    }

    return true;
  });
  if (showTasksByPriority > -1) {
    tasksToShow = tasksToShow.filter((item) => showTasksByPriority === item.priority);
  }

  return (
    <div className="App">
      <div className="container">
        <h1 className="heading1">To Do List</h1>

        <TodoForm
          initialValue=""
          initialPriority={0}
          todoFormInputs={addTaskHandler}
        />

        <nav>
          <button
            className="button__nav button__nav--all"
            onClick={() => setShowTasksByPriority(-1)}
          >
            All
          </button>
          <button
            className="button__nav button__nav--today"
            onClick={() => setShowTasksByPriority(0)}
          >
            Today
          </button>
          <button
            className="button__nav button__nav--week"
            onClick={() => setShowTasksByPriority(1)}
          >
            Week
          </button>
          <button
            className="button__nav button__nav--month"
            onClick={() => setShowTasksByPriority(2)}
          >
            Month
          </button>
          <button
            className="button__nav button__nav--done"
            onClick={showDoneHandler}
          >
            Show done
          </button>
        </nav>

        {tasksToShow.sort((a, b) => a.priority - b.priority)
          .map((item, index) => (
            <ToDoRow
              key={index.toString()}
              rowIndex={item.taskID}
              toDoClose={removeTaskHandler}
              toDoText={item.task}
              toDoCompleted={completeHandler}
              completed={item.completed}
              editTask={openEditWindow}
              priorityColor={priorityColors[item.priority]}
            />
          ))}
      </div>
      {showEditWindow
      && (
      <EditWindow
        task={editValue.task}
        taskID={editValue.taskID}
        taskPriority={editValue.taskPriority}
        getNewTask={updateTask}
      />
      )}
    </div>
  );
};
export default App;
