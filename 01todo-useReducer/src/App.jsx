import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import Heading from "./Components/Heading";
import NoTodoDisplay from "./Components/NoTodoDisplay";
import TodoItemsContextProvider from "./Store/Todo-items-store";


function App() {
  return (
    <>
      <TodoItemsContextProvider>
        <Heading />
        <AddTodo />
        <NoTodoDisplay />
        <TodoItems />
      </TodoItemsContextProvider>
    </>
  );
}

export default App;
