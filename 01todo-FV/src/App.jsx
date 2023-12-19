import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";

import Heading from "./Components/Heading";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      date: "22/11/2023",
    },
    { name: "Make Coffee", date: "22/11/2023" },
    { name: "Learn React", date: "27/11/2023" },
  ];

  return (
    <>
      <Heading />
      <AddTodo />
      <TodoItems toDoItems={todoItems} />
    </>
  );
}

export default App;
