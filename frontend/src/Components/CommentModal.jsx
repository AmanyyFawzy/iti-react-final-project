import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Box,
  List,
  ListItem,
  IconButton,
  Typography,
  Avatar,
} from "@mui/material";
import {
  dialogTitleStyle,
  closeButtonStyle,
  dialogContentStyle,
  commentListContainer,
  commentAvatar,
  commentBox,
  emptyStateBox,
  dialogActionsStyle,
  commentInputBox,
  commentTextField,
} from '../styles/commentModel.style';
import { IoSend, IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from '../api';

export default function CommentModal({ open, handleClose, post, currentUser }) {
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState(post.comments || []);

  const handleAddComment = async () => {
    if (newComment.trim() !== "") {
      const commentObject = {
        text: newComment,
        image: currentUser.personImage,
        firstName: currentUser.firstname,
        lastName: currentUser.lastname,
      };

      const updateComments = [...comments, commentObject];

      try {
        await axios.put(`${BASE_URL}/posts/${post.id}`,{...post,comments:updateComments});
        setComments(updateComments)
        setNewComment('')
      } catch (error) {
         console.error("Failed to update comments", error);
      }
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      {/* header */}
      <DialogTitle
        sx={dialogTitleStyle}>
        Comments
        <IconButton
          sx={closeButtonStyle}
          onClick={handleClose}>
          <IoCloseSharp style={{ color: "#080809" }} />
        </IconButton>
      </DialogTitle>

      {/* content */}
      <DialogContent
        sx={dialogContentStyle}>
        <List sx={commentListContainer}>
          {comments.length ? (
            comments.map((comment, index) => (
              <ListItem key={index} alignItems="flex-start">
                <Avatar
                  alt="User Avatar"
                  src={comment.image}
                  sx={commentAvatar}
                />
                <Box
                  sx={commentBox}>
                  <Typography fontWeight="bold" fontSize="14px">
                    {comment.firstName} {comment.lastName}
                  </Typography>
                  <Typography variant="body2">{comment.text}</Typography>
                </Box>
              </ListItem>
            ))
          ) : (
            <Box sx={emptyStateBox}>
              <Typography>No comments yet</Typography>
            </Box>
          )}
        </List>
      </DialogContent>

      {/* input & send */}
      <DialogActions sx={dialogActionsStyle}>
        <Box sx={commentInputBox}>
          <TextField
            fullWidth
            size="small"
            label="Write a comment..."
            sx={commentTextField}
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <IconButton onClick={handleAddComment}>
            <IoSend style={{ color: "#0872F1" }} />
          </IconButton>
        </Box>
      </DialogActions>
    </Dialog>
  );
}
