import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/Counter";
import { privacyActions } from "../store/Privacy";


function Buttons() {
  const dispatch = useDispatch();
  const userElement = useRef();

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const handleAdd = () => {
    dispatch(counterActions.add(userElement.current.value));
    userElement.current.value = "";
  };

  const handleSubtract = () => {
    dispatch(counterActions.subtract(userElement.current.value));
    userElement.current.value = "";
  };

  const handlePrivate = () => {
    dispatch(privacyActions.toggleState());
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center ">
        <button
          type="button"
          className="btn btn-primary "
          // fdprocessedid="sz8n4"
          onClick={handleIncrement}
        >
          + 1
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary "
          // fdprocessedid="lgl2s"
          onClick={handleDecrement}
        >
          - 1
        </button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center inputRow   ">
        <input
          type="number"
          id="number"
          placeholder="Enter a number"
          fdprocessedid="ubhhy"
          ref={userElement}
        />
        <button
          type="button"
          className="btn btn-info  px-4"
          fdprocessedid="lgl2s"
          onClick={handleAdd}
        >
          Add
        </button>
        <button
          type="button"
          className="btn btn-success  px-4"
          fdprocessedid="lgl2s"
          onClick={handleSubtract}
        >
          Subtract
        </button>
      </div>
      <button
        type="button"
        className="btn btn-danger "
        fdprocessedid="sz8n4"
        onClick={handlePrivate}
      >
        Private
      </button>
    </>
  );
}

export default Buttons;
