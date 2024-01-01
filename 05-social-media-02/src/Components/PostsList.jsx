import React, { useEffect, useState } from "react";
import Post from "./Post";
import { useContext } from "react";
import { PostList as PostListItem } from "../Store/Post-item-store";
import Welcome from "./Welcome";
import Loading from "./Loading";

function PostsList() {
  const { postList, addInitialPosts } = useContext(PostListItem);

  const [fetching, setFetching] = useState(false);

  useEffect(() => {

    const controller = new AbortController();
    const signal = controller.signal;

    setFetching(true);
    fetch("https://dummyjson.com/posts" , {signal})
      .then((res) => res.json())
      .then((obj) => {
        addInitialPosts(obj.posts);
        setFetching(false);
      });

    return () => {
    console.log("useEffect aborted");
    controller.abort();
    }
    }, []);

  return (
    <>
      {fetching && <Loading/>}
      {!fetching && postList.length === 0 && <Welcome />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
}

export default PostsList;
