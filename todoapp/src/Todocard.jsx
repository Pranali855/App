import { useState } from "react";
import TaskItem from "./Taskitem";
import InputBox from "./Inputbox";

export default function TodoCard() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const [error, setError] = useState("");

  const handleAdd = () => {
    if (task.trim() === "") {
      setError("Please enter a task!");
      return;
    }
    setList([...list, task]);
    setTask("");
    setError("");
  };

  const handleDelete = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-card">
      <h2 className="title"> To-Do List</h2>

      {list.length === 0 ? (
        <div className="empty-box">
          <img
            src="https://cdn-icons-png.flaticon.com/128/13745/13745742.png"
            alt="Empty"
          />
          <p>No tasks yet. Add your first task!</p>
        </div>
      ) : (
        <ul className="task-list">
          {list.map((item, index) => (
            <TaskItem
              key={index}
              text={item}
              deleteTask={() => handleDelete(index)}
            />
          ))}
        </ul>
      )}
      <InputBox
        task={task}
        setTask={setTask}
        handleAdd={handleAdd}
      />

      {error && <p className="error-msg">{error}</p>}
    </div>
  );
}
