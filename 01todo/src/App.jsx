import AddTodo from "./Components/AddTodo";
import TodoField from "./Components/TodoField";
import "./App.css"

function App() {
  return (
    <>
      
        <h1>Todo List</h1>
        <div className="todo-items">
        <AddTodo />
        <TodoField />
        </div>
        
      
    </>
  );
}

export default App;
