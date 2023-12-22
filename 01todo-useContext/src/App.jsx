import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import Heading from "./Components/Heading";
import NoTodoDisplay from "./Components/NoTodoDisplay";
import { useState } from "react";
import { TodoItemsContext } from "./Store/Todo-items-store";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (todoName, todoDate) => {
    let newTodoItems = [{ name: todoName, date: todoDate }, ...todoItems];
    setTodoItems(newTodoItems);
  };

  const deleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <>
      <TodoItemsContext.Provider
        value={{
          todoItems,
          addNewItem,
          deleteItem,
        }}
      >
        <Heading />
        <AddTodo />
        <NoTodoDisplay />
        <TodoItems/>
      </TodoItemsContext.Provider>
    </>
  );
}

export default App;
