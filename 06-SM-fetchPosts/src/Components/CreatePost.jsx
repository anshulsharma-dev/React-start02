import React from "react";
import { useContext } from "react";
import { useRef } from "react";
import { PostList } from "../Store/Post-item-store";

function CreatePost() {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const titleElement = useRef();
  const contentElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const userId = userIdElement.current.value;
    const title = titleElement.current.value;
    const content = contentElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    titleElement.current.value = "";
    contentElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: userId,
        title: title,
        body: content,
        reactions: reactions,
        tags: tags,
        /* other product data */
      }),
    })
      .then((res) => res.json())
      .then((post) => {
        console.log(post);
        addPost(post);
      });
  };

  return (
    <form className="postArea" onSubmit={handleOnSubmit}>
      <div className="mb-3">
        <label className="form-label" id="exampleFormControlInput1">
          User ID:
        </label>
        <input
          type="text"
          ref={userIdElement}
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
          ref={titleElement}
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
          ref={contentElement}
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
          ref={reactionsElement}
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
          ref={tagsElement}
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Add your hashtags with a space inbetween"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
}

export default CreatePost;
