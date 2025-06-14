import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { TbShare3 } from "react-icons/tb";
import Divider from '@mui/material/Divider';
import {
  Box,
  Avatar,
  Typography,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
} from "@mui/material";

import {
  cardStyle,
  footerStyle,
  footerBtnStyle,
  likeIconWrapperStyle,
  likeLabelStyle,
} from "../styles/PostCard.style";

import PostOptions from "./PostOptions";
import { useState } from "react";
import CommentModal from "./CommentModal";

export default function PostCard({ post, currentUser, onPostDeleted,onEditPost  }) {
  const [liked, setLiked] = useState(false);
  const [showComments,setShowComments]=useState(false);

  return (
    <>
      <Card sx={cardStyle}>
        {/* header */}
        <CardHeader
          avatar={<Avatar src={post.personImage} alt="person img" />}
          action={
            currentUser &&
            currentUser.id === post.userId && (
              <PostOptions postId={post.id} onPostDeleted={onPostDeleted} postTitle={post.title} postImgUrl={post.postImage} onEdit={(data)=>{onEditPost(data)}}/>
            )
          }
          title={<Typography fontWeight={600}>{post.personName}</Typography>}
          subheader="Just now"
        />

        {/* Content */}
        <CardContent>
          <Typography variant="subtitle1" fontWeight="500">
            {post.title}
          </Typography>
        </CardContent>

        {/* img */}
        {post.postImage && (
          <CardMedia
            component="img"
            height="300"
            image={post.postImage}
            alt="Post"
            sx={{ objectFit: "cover" }}
          />
        )}
        <Divider></Divider>

        {/* Footer */}
        <Box
          sx={footerStyle}>
          {/* like btn */}
          <button
            style={footerBtnStyle}>
            <span
              onClick={() => setLiked(!liked)}
              style={likeIconWrapperStyle}>
              {liked ? (
                <AiFillLike
                  size={20}
                  style={{ marginRight: "5px",color:"#0d8ddb" }}
                />
              ) : (
                <AiOutlineLike size={20} style={{ marginRight: "5px" }} />
              )}
              <span style={likeLabelStyle}>Like</span>
            </span>
          </button>

          {/* comment btn */}
          <button  onClick={()=>{setShowComments(true)}}
            style={footerBtnStyle}>
            <FaRegComment style={{ marginRight: "5px" }} size={15} />
            Comment
          </button>

          {/* share btn */}
          <button
            style={footerBtnStyle}>
            <TbShare3 style={{ marginRight: "5px" }} size={18} />
            Share
          </button>
        </Box>
      </Card>

      {/* comment model */}
      <CommentModal open={showComments} handleClose={()=>{setShowComments(false)}} post={post} currentUser={currentUser}/>
    </>
  );
}
