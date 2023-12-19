import React from "react";
import "../App.css"

function TodoItem({ name, date }) {
  return (
    <>
      <div className="container p-1">
        <div className="row mb-3  ">
          <div className="col-6 todoItems ">{name}</div>
          <div className="col-4 todoItems">{date}</div>

          <div className="col-2 ">
            <button
             type="button" className="btn btn-danger " >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
