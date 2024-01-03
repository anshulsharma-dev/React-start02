import React, { useEffect, useState } from "react";
import Post from "./Post";
import { useContext } from "react";
import { PostList as PostListItem } from "../Store/Post-item-store";
import Welcome from "./Welcome";
import Loading from "./Loading";

function PostsList() {
  const { postList, fetching } = useContext(PostListItem);

  return (
    <>
      {fetching && <Loading />}
      {!fetching && postList.length === 0 && <Welcome />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
}

export default PostsList;
