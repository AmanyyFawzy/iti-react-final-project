import { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "./PostCard";
import { Box } from "@mui/material";
import { BASE_URL } from '../api';

export default function Posts({refresh,currentUser,onEditPost}) {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    let response = await axios.get(`${BASE_URL}/posts`);
    setPosts(response.data.reverse());     //new post appears above
  };

  useEffect(() => {
    getPosts();
  }, [refresh]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, p: 2, maxWidth: 600, mx: "auto" }}>
      {posts.map((post) => (
         <PostCard post={post} key={post.id} currentUser={currentUser}  onPostDeleted={getPosts} onEditPost={onEditPost}/>
      ))}
    </Box>
  );
}
