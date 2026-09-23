import TodoItem from "./TodoItem";

function TodoList() {
  return (
    <div className="todo-list">
      <TodoItem
        title="Learn React"
        completed={false}
      />

      <TodoItem
        title="Learn CSS"
        completed={true}
      />

      <TodoItem
        title="Build a Todo App"
        completed={false}
      />
    </div>
  );
}

export default TodoList;