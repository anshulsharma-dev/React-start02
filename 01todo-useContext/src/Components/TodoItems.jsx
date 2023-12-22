import React, { useContext } from "react";
import { TodoItemsContext } from "../Store/Todo-items-store";
import TodoItem from "./TodoItem";

function TodoItems({ deleteButtonClicked }) {
  const todoItems = useContext(TodoItemsContext);
  return (
    <>
      <div className="container bg-info">
        {todoItems.length !== 0 &&
          todoItems.map((item) => (

            <TodoItem
              deleteButtonClicked={deleteButtonClicked}
              key={item.name}
              name={item.name}
              date={item.date}
            />
          ))}
      </div>
    </>
  );
}

export default TodoItems;
