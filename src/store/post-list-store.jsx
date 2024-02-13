import { createContext, useReducer } from "react";

export const PostListContext = createContext({
  postsList: [],
  createPost: () => {},
  deletePost: () => {}
});

const postReducer = (currentPosts, action) => {
  let newPosts;
  if (action.type === "NEW_POST") {
    newPosts = [
      ...currentPosts,
      {
        title: action.payload.title,
        desc: action.payload.desc,
      },
    ];
  }

  if (action.type === "DELETE_POST") {
    newPosts = currentPosts.filter((post)=> post.title !== action.payload.title)
  }

  return newPosts;
};

export const PostListProvider = ({ children }) => {
  const [postsList, dispatchAction] = useReducer(postReducer, []);

  const createPost = (title, desc) => {
    const actionObj = {
      type: "NEW_POST",
      payload: {
        title: title,
        desc: desc,
      },
    };
    dispatchAction(actionObj);
  };


  const deletePost = (title) => {
    const actionObj = {
      type: "DELETE_POST",
      payload: {
        title: title,
      },
    };
    dispatchAction(actionObj);
  };

  return (
    <PostListContext.Provider
      value={{
        postsList,
        createPost,
        deletePost
      }}
    >
      {children}
    </PostListContext.Provider>
  );
};
