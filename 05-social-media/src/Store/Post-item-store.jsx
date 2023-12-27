import { useReducer } from "react";
import { CreateContext } from "react";

export const PostList = CreateContext({
  postList: DEFAULT_ITEM_LIST,
  addPost: () => {},
  deletePost: () => {},
});

const PostListReducer = (currPostList , action) => {
  let newPostList = currPostList;
  
}

const PostListProvider = ({ children }) => {
  const [postList , dispatchPostList] = useReducer(PostListReducer , DEFAULT_ITEM_LIST);
  const addPost = () => {
  
  };
  const deletePost =() => {

  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

DEFAULT_ITEM_LIST = [{
  userId : "user96",
  title : "I will learn React and be a great software developer",
  body : "I will learn React and be a great software developer and i will learn Dsa too , i will be great coder",
  reaction : "2",
  id : Date.now(),

},
{
  userId : "user78",
  title : "I ",
  body : "I will learn React and be a great software developer and i will learn Dsa too , i will be great coder",
  reaction : "32",
  id : Date.now(),
}]

export default PostListProvider;
