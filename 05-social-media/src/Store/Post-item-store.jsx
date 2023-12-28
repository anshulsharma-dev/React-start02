import { useReducer } from "react";
import { createContext } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const PostListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  } else if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    PostListReducer,
    DEFAULT_ITEM_LIST
  );

  const addPost = (userId, title, content, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        userId,
        title,
        body: content,
        reaction: reactions,
        id: Date.now(),
        tags,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: { postId },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_ITEM_LIST = [
  {
    userId: "user96",
    title: "I will learn React",
    body: "Learning react all day all night , still some things slip from my grasp but ya progress is made.",
    reaction: "8",
    id: 0,
    tags: ["React", "Dsa", "Learning"],
  },
  {
    userId: "user78",
    title: "Going on a trek",
    body: "Going to go on a hike and camp in woods and have a bonfire at night.",
    reaction: "32",
    id: 1,
    tags: ["Travelling", "Nomad", "IntoTheWild"],
  },
];

export default PostListProvider;
