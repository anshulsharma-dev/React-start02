import React from "react";
import Post from "./Post";
import { useContext } from "react";
import { PostList as PostListItem } from "../Store/Post-item-store";
import Welcome from "./Welcome";
import { useLoaderData } from "react-router-dom";

function PostsList() {
  const postList =  useLoaderData();

  return (
    <>
      {postList.length === 0 && <Welcome />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}
export const postListLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((obj) => {
      return obj.posts
    });
};

export default PostsList;
