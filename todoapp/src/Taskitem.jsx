export default function TaskItem({ text, deleteTask }) {
  return (
    <li className="task-item">
      <span>{text}</span>
      <button className="del-btn" onClick={deleteTask}>✖</button>
    </li>
  );
}
