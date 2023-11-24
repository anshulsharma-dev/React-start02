import React from "react";

function AddTodo() {
  return (
    <div class="row">
      <div class="col-6">
        {" "}
        <input type="text" placeholder="Enter Todo here:" />{" "}
      </div>
      <div class="col-4">
        <input type="date" placeholder="Date:" />
      </div>
      <div class="col-2">
        <button type="button" class="btn btn-success todo-button">
          Add
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
