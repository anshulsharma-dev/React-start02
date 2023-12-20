import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import Heading from "./Components/Heading";
import NoTodoDisplay from "./Components/NoTodoDisplay";
import { useState } from "react";

function App() {

  const [todoItems, setTodoItems] = useState("");
 

  const handleNewItem = (todoName , todoDate) => {
    let newTodoItems = [{"name": todoName , "date":todoDate} , ...todoItems];
    setTodoItems(newTodoItems);
  }

  const handleDeleteButtonClicked = (todoItemName) => {
    const newTodoItems = todoItems.filter(item => item.name !== todoItemName)
    setTodoItems(newTodoItems);
  }
 
  return (
    <>
      <Heading />
      <AddTodo onNewItem={handleNewItem}/>
      {todoItems.length === 0 && <NoTodoDisplay />}
      <TodoItems deleteButtonClicked={handleDeleteButtonClicked} todoItems={todoItems} />
    </>
  );
}

export default App;
