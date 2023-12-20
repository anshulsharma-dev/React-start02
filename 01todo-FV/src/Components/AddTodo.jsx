import React, { useState } from "react";
import "../App.css";
import styles from "./AddTodo.module.css";

function AddTodo({ onNewItem}) {

  const [newTodo , setNewTodo] = useState("");
  const [newDate , setNewDate] = useState("");

  const handleTodoChange = (e) => {
   setNewTodo(e.target.value);
  }
  const handleDateChange = (e) => {
    setNewDate(e.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(newTodo , newDate)
    setNewTodo("");
    setNewDate("");
  }

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
              onChange={handleTodoChange}
              value={newTodo}
            />
          </div>

          <div className={`${styles.dataTodo} col-4
          `}>
            <input
            className="form-control
            p-2 bg-info bg-opacity-10 border border-info border-start-0 rounded-end"
             type="date" placeholder="Date:" 
             onChange={handleDateChange}
             value={newDate}
             />
          </div>

          <div className="col-2">
            <button type="button" className="btn btn-primary"
            onClick={handleAddButtonClicked} 
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTodo;
