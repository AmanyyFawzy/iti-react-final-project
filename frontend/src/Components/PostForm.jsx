import {
  Box,
  Button,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import {
  overlayStyle,
  paperStyle,
  headerStyle,
  titleStyle,
  closeIconStyle,
  postTitleInputStyle,
  imgUrlInputStyle,
  submitButtonStyle,
} from '../styles/PostForm.styles';

import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

export default function PostForm({
  onClose,
  onSubmit,
  isEditing = false,
  defaultValues = {},
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ defaultValues });

  useEffect(() => {
    console.log("Checking defaultValues before reset:", defaultValues);

    if (
      defaultValues &&
      (defaultValues.postTitle !== "" || defaultValues.postImgUrl !== "")
    ) {
      reset(defaultValues);
    }
  }, [defaultValues.postTitle, defaultValues.postImgUrl]);

  const onFormSubmit = (data) => {
    console.log("Submitting form data:", data);

    onSubmit(data);
  };

  return (
    <>
      <Box
        sx={overlayStyle}>
        <Paper
          sx={paperStyle}>

          {/* Header */}
          <Box
            sx={headerStyle}>
            <Typography
              variant="h6"
              sx={titleStyle}>
              {isEditing ? "Edit Post" : "Create Post"}
            </Typography>
            <IconButton
              onClick={onClose}
              sx={closeIconStyle}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Post Title Input */}
          <TextField
            multiline
            rows={4}
            placeholder="What's on your mind?"
            fullWidth
            variant="standard"
            InputProps={{ disableUnderline: true }}
            sx={postTitleInputStyle}
            {...register("postTitle", {
              required: "This field is required!",
            })}
            error={!!errors.postTitle}
            helperText={errors.postTitle?.message}
          />

          {/* Image URL Field */}
          <TextField
            placeholder="Image URL (optional)"
            fullWidth
            variant="standard"
            InputProps={{ disableUnderline: true }}
            sx={imgUrlInputStyle}
            {...register("postImgUrl", {
              pattern: {
                value: /^(https?:\/\/.*)/i,
                message: "Please enter a valid image URL",
              },
            })}
            error={!!errors.postImgUrl}
            helperText={errors.postImgUrl?.message}
          />

          {/* Submit Button */}
          <Button
            variant="contained"
            fullWidth
            sx={submitButtonStyle}
            onClick={handleSubmit(onFormSubmit)}>
            {isEditing ? "Edit" : "Post"}
          </Button>
        </Paper>
      </Box>
    </>
  );
}
