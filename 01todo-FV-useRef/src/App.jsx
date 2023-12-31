import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import Heading from "./Components/Heading";
import NoTodoDisplay from "./Components/NoTodoDisplay";
import { useState } from "react";
import { TodoItemsContext } from "./Store/Todo-item-store";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (todoName, todoDate) => {
    setTodoItems((currValue) => [
      ...currValue,
      { name: todoName, date: todoDate },
    ]);
  };

  const handleDeleteButtonClicked = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };
  
  return (
    <>
    <TodoItemsContext.Provider value={[]}>
      <Heading />
      <AddTodo onNewItem={handleNewItem} />
       <NoTodoDisplay todoItems={todoItems} />
      <TodoItems
        deleteButtonClicked={handleDeleteButtonClicked}
        todoItems={todoItems}
      />
      </TodoItemsContext.Provider>
    </>
  );
}

export default App;
