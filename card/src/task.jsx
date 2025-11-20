import React, { useState } from "react";
import "./src/Task.css";
import { Trash } from "lucide-react";

function TaskCard({ task, deleteTask }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    localStorage.setItem("taskStatus", JSON.stringify(!isChecked));
  };

  return (
    <div className="taskCard">
      <div className="task">
        <input
          type="checkbox"
          className="checkbox"
          onChange={handleCheckboxChange}
          checked={isChecked}
        />

        <p className={isChecked ? "checked" : ""}>
          {task}
        </p>
      </div>

      <button
        className="deleteBtn"
        onClick={() => deleteTask(task)}
      >
        <Trash size={20} />
      </button>
    </div>
  );
}

export default TaskCard;
