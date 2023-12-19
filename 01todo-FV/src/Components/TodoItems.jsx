import React from "react";

import TodoItem from "./TodoItem";

function TodoItems({ toDoItems }) {
 
  return (
    <>
      
        <div className="container bg-info">
          {toDoItems.map((item) => (
            <TodoItem key={item.name} name={item.name} date={item.date} />
          ))}
           
        </div>
       
    </>
  );
}

export default TodoItems;
