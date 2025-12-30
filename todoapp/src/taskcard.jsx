import { Trash2 } from 'lucide-react';
import "./taskcard.css";

function TaskCard({ task }) {
  return (
    <div className="task-card">
      {task}
      <Trash2 className="icon-delete" />
    </div>
  );
}

export default TaskCard;
