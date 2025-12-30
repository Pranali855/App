import React, { useState } from 'react';
import TaskCard from './taskcard.jsx';
import './App.css';
function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  return (
    <div>
      <h1 className="app-heading">ToDo App</h1>

      <p className="app-subheading">
        This is a simple ToDo application built with React.
      </p>

      <div className="task-list">
        {tasks.map((task, index) => {
          return <TaskCard key={index} task={task} />;
        })}
      </div>

      <div className="todo-container">
        <input
          type="text"
          className="task-input"
          value={newTask}
          onChange={(e) => {
            setNewTask(e.target.value);
          }}
        />

        <button
          className="add-btn"
          onClick={() => {
            setTasks([newTask, ...tasks]);
            setNewTask("");
          }}
        >
          Add Task
        </button>
      </div>
    </div>
  );
}

export default App;
