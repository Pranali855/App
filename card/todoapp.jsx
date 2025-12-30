import React, { useState } from 'react';
import taskCard from './taskcard.jsx';
function App() {
  
    const[tasks,setTasks]=useState([ ]);
      const [newTask,setNewTask]=useState("");
 return(
    <div>
<h1 classname="app-heading"> ToDo App</h1>
<p classname=" app-subheading">
This is a simple ToDo application built with React.
</p>
<div classname="task-list">
{tasks.map((task,index)=>{
    return <taskCard key={index} task={task} />;
})}
    </div>
    <div classname="todo-container">
       <input type="text" classname="task-input" value={newTask} onChange={(e)=>{
        setNewTask(e.target.value);
       }}
       />
       <button classname="add-btn" onClick={()=>{
        setTasks([newTask,...tasks]);
        setNewTask("");
       }}>Add Task</button>
    </div>
    </div>
 );
}
export default App;
