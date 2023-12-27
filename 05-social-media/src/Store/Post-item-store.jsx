import { useReducer } from "react";
import { useContext } from "react";

const PostList = useContext({});

const PostListProvider = ({children}) => {

  return <PostList.Provider value={[]} >{children}</PostList.Provider>
}

export default  PostListProvider;