import React from "react";

function CreatePost() {
  return (
    <>
      <div className="mb-3">
        <label
          htmlFor="examplehtmlFormControlInput1"
          className="htmlForm-label"
        >
          Email address
        </label>
        <input
          type="email"
          className="htmlForm-control"
          id="examplehtmlFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label
          htmlFor="examplehtmlFormControlTextarea1"
          className="htmlForm-label"
        >
          Example textarea
        </label>
        <textarea
          className="htmlForm-control"
          id="examplehtmlFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
    </>
  );
}

export default CreatePost;
