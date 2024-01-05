import React, { useContext } from "react";

import { Form, redirect } from "react-router-dom";
import { PostList } from "../Store/Post-item-store";


function CreatePost() {

  return (
    <Form method="POST" className="postArea">
      <div className="mb-3">
        <label className="form-label" id="exampleFormControlInput1">
          User ID:
        </label>
        <input
          type="text"
          name="userId"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter your User ID..."
        />
      </div>
      <div className="mb-3">
        <label className="form-label" id="exampleFormControlInput1">
          Post Title:
        </label>
        <input
          type="text"
          name="title"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="What you feel today..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Content:
        </label>

        <textarea
          type="text"
          name="content"
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Tell us more about it ..."
        ></textarea>
      </div>
      <div className="mb-3">
        <label className="form-label" id="exampleFormControlInput1">
          Enter the reactions:
        </label>
        <input
          type="text"
          name="reactions"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="react on yourself..."
        />
      </div>
      <div className="mb-3">
        <label className="form-label" id="exampleFormControlInput1">
          Enter your #HashTags:
        </label>
        <input
          type="text"
          name="tags"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Add your hashtags with a space inbetween"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
}
export default CreatePost;


export async function createPostAction(data) {
 

  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData .tags.split(" ");
  console.log(postData);

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
      //  addPost(post);
    });

  return redirect("/");
}

