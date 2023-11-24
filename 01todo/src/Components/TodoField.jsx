import React from "react";

function TodoField() {
  let todoItem = "Buy milk";
  let todoDate = '22/11/2023'
  return (
    <>
      <div class="row todo-items">
        <div class="col-6">
          <p>{todoItem}</p>
        </div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger todo-button">
            Delete
          </button>
        </div>
      </div>

      <div class="row todo-items">
        <div class="col-6">Make Coffee</div>
        <div class="col-4">22/11/2023</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger todo-button">
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoField;
