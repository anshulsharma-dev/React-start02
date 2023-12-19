import React from "react";
import "../App.css";
import styles from "./AddTodo.module.css";

function AddTodo() {
  return (
    <>
      <div className="container mb-4 ">
        <div className="row ">
          <div className={`${styles.inputTodo}  col-6 
          `}>
            <input
            className="form-control
            p-2 bg-info bg-opacity-10 border border-info border-start-0 rounded-end"
              type="text"
              placeholder="Enter Todo here:"
            />
          </div>

          <div className={`${styles.dataTodo} col-4
          `}>
            <input
            className="form-control
            p-2 bg-info bg-opacity-10 border border-info border-start-0 rounded-end"
             type="date" placeholder="Date:" />
          </div>

          <div className="col-2">
            <button type="button" className="btn btn-primary">
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTodo;
