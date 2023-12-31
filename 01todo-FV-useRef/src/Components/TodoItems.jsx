import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../Store/Todo-item-store";

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
