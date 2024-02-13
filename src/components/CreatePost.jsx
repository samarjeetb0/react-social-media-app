import { useContext, useRef } from "react";
import { PostListContext } from "../store/post-list-store";

export const CreatePost = () => {
  const { createPost } = useContext(PostListContext);
  const title = useRef("");
  const desc = useRef("");
  const handleOnClick = () => {
        createPost(title.current.value, desc.current.value)    
  };

  return (
    <>
      <form>
        <div className="mb-3">
          <label className="form-label">Post title</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            ref={title}
          />
          {/* <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div> */}
        </div>
        <div className="mb-3">
          <label className="form-label">Content</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            ref={desc}
          />
        </div>
        {/* <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" >
            Check me out
          </label>
        </div> */}
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleOnClick}
        >
          Post
        </button>
      </form>
    </>
  );
};
