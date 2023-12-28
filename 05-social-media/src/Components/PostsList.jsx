import React from "react";
import Post from "./Post";
import { useContext } from "react";
import { PostList as PostListItem } from "../Store/Post-item-store";

function PostsList() {
  const {postList} = useContext(PostListItem);
  return (
    <>
    {postList.map(post => <Post key={post.id} post={post} /> )}
      
    </>
  );
}

export default PostsList;
