import React from "react";

import TodoItem from "./TodoItem";

function TodoItems({ todoItems , deleteButtonClicked}) {
 
  return (
    <>
        <div className="container bg-info">
          {todoItems.length!==0 && todoItems.map((item) => (
            <TodoItem deleteButtonClicked = {deleteButtonClicked} key={item.name} name={item.name} date={item.date} />
          ))}
           
        </div>
       
    </>
  );
}

export default TodoItems;
