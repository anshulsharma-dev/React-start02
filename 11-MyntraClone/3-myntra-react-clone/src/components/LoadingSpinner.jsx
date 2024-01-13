import React from "react";

function LoadingSpinner() {
  return (
    <div className=" text-center spinner ">
      <div
        className="spinner-border text-success"
        style={{ width: "4rem", height: "4rem" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>

        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-border text-secondary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
}

export default LoadingSpinner;
