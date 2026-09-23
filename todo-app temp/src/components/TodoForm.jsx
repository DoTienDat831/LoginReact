function TodoForm() {
  return (
    <div className="todo-form">
      <input
        type="text"
        placeholder="What needs to be done?"
      />

      <button>+</button>
    </div>
  );
}

export default TodoForm;