import React from "react";
import "../App.css";
import { RiDeleteBin6Line } from "react-icons/ri";

function TodoItem({ name, date, deleteButtonClicked }) {
  return (
    <>
      <div className="container p-1">
        <div className="row m-1 ">
          <div className="col-6 todoItems ">{name}</div>
          <div className="col-4 todoItems">{date}</div>

          <div className="col-2 ">
            <button
              type="button"
              className="btn btn-danger "
              onClick={() => deleteButtonClicked(name)}
            >
             <RiDeleteBin6Line />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
