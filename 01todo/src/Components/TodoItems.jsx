import React from "react";

import TodoItem from "./TodoItem";

function TodoItems({ todoItems }) {
 
  return (
    <>
      
        <div className="container bg-info">
          {todoItems.map((item) => (
            <TodoItem key={item.name} name={item.name} date={item.date} />
          ))}
           
        </div>
       
    </>
  );
}

export default TodoItems;
