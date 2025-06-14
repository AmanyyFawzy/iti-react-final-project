import { useState } from "react";
import { Avatar, Box, Button, Divider, Paper, TextField } from "@mui/material";
import { FaVideo } from "react-icons/fa";
import { FaPhotoFilm, FaFaceGrin } from "react-icons/fa6";
import PostForm from "../Components/PostForm";
import Posts from "../Components/Posts";
import SideBar from "../Components/SideBar.jsx";
import axios from "axios";
import { toast } from "react-toastify";
import NavBar from "../Components/NavBar.jsx";
import {
  actionBtnStyles,
  textFieldStyles,
  mainContainerStyles,
  paperStyles,
  topBoxStyles,
  bottomActionsStyles,
} from "../styles/Home.styles.js";

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [refreshPosts, setRefreshPosts] = useState(0);
  const [editingPost, setEditingPost] = useState(null);

  const storedUser = localStorage.getItem("user");
  const userData = storedUser ? JSON.parse(storedUser) : null;

  const resetForm = () => {
    setShowForm(false);
    setEditingPost(null);
    setRefreshPosts((prev) => prev + 1);
  };

  const handleEditPost = (post) => {
    setEditingPost(post);
    setShowForm(true);
  };

  // handle (Edit/Delete) Post
  const handlePost = async (data) => {
    const { postTitle, postImgUrl } = data;
    //edit post
    if (editingPost) {
      const updatedPost = {
        ...editingPost,
        title: postTitle,
        postImage: postImgUrl,
        personName: `${userData.firstname} ${userData.lastname}`,
        personImage:
          userData.image ||
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        userId: userData.id,
      };

      try {
        await axios.put(
          `http://localhost:4000/posts/${editingPost.id}`,
          updatedPost
        );
        toast.success("Post updated successfully!");
        resetForm();
      } catch (error) {
        toast.error("Failed to update post");
      }

      return;
    }

    //create post
    const newPost = {
      personName: `${userData.firstname} ${userData.lastname}`,
      personImage:
        userData.image ||
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      userId: userData.id,
      title: postTitle,
      postImage: postImgUrl,
      comments: []
    };

    try {
      await axios.post("http://localhost:4000/posts", newPost);
      toast.success("Post created successfully!");
      resetForm();
    } catch (error) {
      toast.error("Failed to create post");
    }
  };

  return (
    <>
      <NavBar /> 
      
      <SideBar />

      <Box sx={mainContainerStyles}>
        <Paper elevation={1} sx={paperStyles}>
          <Box sx={topBoxStyles}>
            <Avatar
              alt="profile img"
              src={
                userData?.image ||
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              }
            />
            <TextField
              placeholder={`What's on your mind, ${userData.firstname}?`}
              variant="outlined"
              inputProps={{ readOnly: true }}
              fullWidth
              size="small"
              onFocus={() => {
                setShowForm(true);
                setEditingPost(null);
              }}
              sx={textFieldStyles}
            />
          </Box>

          <Divider />

          <Box sx={bottomActionsStyles}>
            <Button
              startIcon={<FaVideo color="#E42645" />}
              sx={actionBtnStyles}>
              Live Video
            </Button>
            <Button
              startIcon={<FaPhotoFilm color="#41B35D" />}
              sx={actionBtnStyles}>
              Photo/Video
            </Button>
            <Button
              startIcon={<FaFaceGrin color="#EAB026" />}
              sx={actionBtnStyles}>
              Feeling/Activity
            </Button>
          </Box>
        </Paper>
        
        {/* Show Form to create post */}
        {showForm && (
          <PostForm
            defaultValues={{
              postTitle: editingPost?.title || "",
              postImgUrl: editingPost?.postImage || "",
            }}
            onClose={resetForm}
            onSubmit={handlePost}
            isEditing={!!editingPost}
          />
        )}

        {/** display posts */}
        <Posts
          refresh={refreshPosts}
          currentUser={userData}
          onEditPost={handleEditPost}
        />
      </Box>
    </>
  );
}
