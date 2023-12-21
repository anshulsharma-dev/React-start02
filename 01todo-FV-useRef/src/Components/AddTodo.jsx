import React, { useRef } from "react";
import "../App.css";
import styles from "./AddTodo.module.css";
import { MdAddTask } from "react-icons/md";

function AddTodo({ onNewItem }) {
  const newTodoElement = useRef();
  const newDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = newTodoElement.current.value;
    const todoDate = newDateElement.current.value;
    newTodoElement.current.value = "";
    newDateElement.current.value = "";
    onNewItem(todoName, todoDate);
  };

  return (
    <>
      <div className="container mb-4 ">
        <form className="row" onSubmit={handleAddButtonClicked}>
          <div
            className={`${styles.inputTodo}  col-6 
          `}
          >
            <input
              className="form-control
            p-2 bg-info bg-opacity-10 border border-info border-start-0 rounded-end"
              type="text"
              placeholder="Enter Todo here:"
              ref={newTodoElement}
            />
          </div>

          <div
            className={`${styles.dataTodo} col-4
          `}
          >
            <input
              className="form-control
            p-2 bg-info bg-opacity-10 border border-info border-start-0 rounded-end"
              type="date"
              placeholder="Date:"
              ref={newDateElement}
            />
          </div>

          <div className="col-2">
            <button className="btn btn-primary">
              <MdAddTask />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddTodo;
