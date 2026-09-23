import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="todo-container">
        <Header />

        <TodoForm />

        <TodoList />

        <p className="task-count">2 tasks remaining</p>
      </div>
    </div>
  );
}

export default App;