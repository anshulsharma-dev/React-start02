import React, { useEffect, useState } from "react";
import Post from "./Post";
import { useContext } from "react";
import { PostList as PostListItem } from "../Store/Post-item-store";
import Welcome from "./Welcome";

function PostsList() {
  const { postList } = useContext(PostListItem);
  console.log(postList);
  return (
    <>
      {postList.length === 0 && <Welcome />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}

export default PostsList;
