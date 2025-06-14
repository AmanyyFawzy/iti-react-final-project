import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { FaUserFriends, FaClock, FaUsers, FaStore } from "react-icons/fa";
import { IoMdBookmark } from "react-icons/io";
import { MdOndemandVideo, MdDynamicFeed, MdExpandMore } from "react-icons/md";
import {
  iconStyle,
  textStyle,
  drawerPaperStyle,
  mobileDrawerPaperStyle,
  mobileMenuIconContainer,
  wrapperBoxStyle,
  drawerContentBox,
} from "../styles/Sidebar.style";

const menuItems = [
  { text: "Friends", icon: <FaUserFriends /> },
  { text: "Saved", icon: <IoMdBookmark style={{ color: "#B93EB5" }} /> },
  { text: "Reels", icon: <MdOndemandVideo /> },
  { text: "Memories", icon: <FaClock /> },
  { text: "Groups", icon: <FaUsers /> },
  { text: "Marketplace", icon: <FaStore /> },
  { text: "Feeds", icon: <MdDynamicFeed /> },
  { text: "See More", icon: <MdExpandMore /> },
];

export default function Sidebar() {
  const [collapse, setCollapse] = useState(false);

  const drawerContent = (
    <Box sx={{ width: 220}}>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={iconStyle}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} primaryTypographyProps={textStyle} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={wrapperBoxStyle}>
      {/* for small screens */}
      <Box
        sx={mobileMenuIconContainer}
      >
        <IconButton
          color="black"
          aria-label="open drawer"
          edge="end"
          onClick={() => setCollapse(!collapse)}
        >
          <MenuIcon style={{fontSize:'30px'}}/>
        </IconButton>
      </Box>

      {/* Sidebar Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": drawerPaperStyle,
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={collapse}
        onClose={() => setCollapse(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": mobileDrawerPaperStyle,
        }}
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
}
