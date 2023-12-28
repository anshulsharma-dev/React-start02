import React from "react";
import { useContext } from "react";
import { RiDeleteBin7Line } from "react-icons/ri";

import { PostList } from "../Store/Post-item-store";

function Post({ post }) {
  const {deletePost} = useContext(PostList);

  return (
    <div className="card post">
      <div className="card-body insidePost">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        <RiDeleteBin7Line className="delBtn"  onClick={() => deletePost(post.id)}/>
        </span>
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="badge rounded-pill text-bg-primary hashtags"
          >
            {tag}
          </span>
        ))}
        <div className="alert alert-primary reaction" role="alert">
          You have been reacted by {post.reaction} people.
        </div>
      </div>
    </div>
  );
}

export default Post;
