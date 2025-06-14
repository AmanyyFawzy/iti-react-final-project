import { useState } from "react";
import { MdMoreHoriz, MdEdit } from "react-icons/md";
import {
  Menu,
  IconButton,
  Button,
  Stack,
  Box,
  Typography,
} from "@mui/material";
import {
btnOptionStyle
} from '../styles/PostCard.style'
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "react-toastify";
import axios from "axios";
import { BASE_URL } from '../api';


const PostOptions = ({ postId, onPostDeleted,onEdit,postTitle,postImgUrl}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  //edit post
  const handleEdit = () => {
    if(onEdit){
      onEdit({
        id:postId,
        title:postTitle,
        postImage:postImgUrl
      })
    }
    handleCloseMenu();
  };

  //Confirm deleting
  const handleConfirm = async (closeToast) => {
    try {
      await axios.delete(`${BASE_URL}/posts/${postId}`);
      toast.success("Post deleted successfully 🎉");
      if (onPostDeleted) {
        onPostDeleted();
      }
    } catch (error) {
      toast.error("Failed to delete post, try again 😢");
    }
    closeToast();
  };
  
  //delete post
  const handleDelete = () => {
    handleCloseMenu();

    const confirmToast = ({ closeToast }) => (
      <Box>
        <Typography variant="subtitle1" sx={{ mb: 2, mt: 2 }}>
          Are you sure you want to delete this post?
        </Typography>
        <Stack direction="row" spacing={1} justifyContent="flex-end">
          <Button
            variant="contained"
            color="error"
            size="small"
            onClick={() => handleConfirm(closeToast)}>
            Yes
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            size="small"
            onClick={closeToast}>
            No
          </Button>
        </Stack>
      </Box>
    );

    toast(confirmToast, {
      autoClose: false,
      draggable: false,
      closeOnClick: false,
    });
  };

  return (
    <>
      <IconButton onClick={handleOpenMenu}>
        <MdMoreHoriz />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}>
        <Stack>
          <Button
            onClick={handleEdit}
            variant="outlined"
            startIcon={<MdEdit style={{color:'blue'}}/>}
            sx={btnOptionStyle}>
            Edit
          </Button>

          <Button
            onClick={handleDelete}
            variant="outlined"
            startIcon={<DeleteIcon style={{color:'red'}}/>}
            sx={btnOptionStyle}>
            Delete
          </Button>
        </Stack>
      </Menu>
    </>
  );
};

export default PostOptions;
