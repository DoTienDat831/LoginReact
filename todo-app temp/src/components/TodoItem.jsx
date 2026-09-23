function TodoItem({ title, completed }) {
  return (
    <div className={`todo-item ${completed ? "completed" : ""}`}>
      <div className="todo-left">
        <button className="checkbox">
          {completed ? "✓" : ""}
        </button>

        <span>{title}</span>
      </div>

      <button className="more-button">⋮</button>
    </div>
  );
}

export default TodoItem;