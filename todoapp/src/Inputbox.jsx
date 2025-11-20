export default function InputBox({ task, setTask, handleAdd }) {
  return (
    <div className="input-area">
      <input
        type="text"
        placeholder="Write a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
