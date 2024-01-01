import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemsContext = createContext([]);

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "New_Item") {
    newTodoItems = [
      { name: action.payload.todoName, date: action.payload.todoDate },
      ...currTodoItems,
    ];
  } else if (action.type === "Delete_Item") {
    newTodoItems = currTodoItems.filter(
      (item) => item.name !== action.payload.todoItemName
    );
  }
  return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (todoName, todoDate) => {
    const newItemAction = {
      type: "New_Item",
      payload: {
        todoName,
        todoDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (todoItemName) => {
    const deleteItem = {
      type: "Delete_Item",
      payload: {
        todoItemName,
      },
    };
    dispatchTodoItems(deleteItem);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
