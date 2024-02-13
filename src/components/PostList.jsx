import { useContext } from "react"
import { Post } from "./Post"
import { PostListContext } from "../store/post-list-store"

export const PostList = () =>{
const {postsList, deletePost} = useContext(PostListContext)

const handlePostDelete = (title) =>{
    deletePost(title);
}

    return (
        <>
        {postsList.map((post)=><Post key={post.title} title={post.title} desc={post.desc} postDelete={()=>handlePostDelete(post.title)}/>)}
        </>
    )
}