import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  InputBase,
  Badge,
  Menu,
  MenuItem,
  Avatar,
  Tooltip,
} from "@mui/material";
import {
  appBarStyle,
  toolbarStyle,
  searchContainerStyle,
  centerIconsBox,
  activeIconButton,
  navIconButton,
  iconWrapper,
  mobileMenuIcon,
  desktopIcons,
} from '../styles/navbar.style'

import { BsFacebook } from "react-icons/bs";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { LuGamepad } from "react-icons/lu";
import { MdLogout, MdOndemandVideo } from "react-icons/md";
import { RiMessengerFill } from "react-icons/ri";
import { IoSettingsOutline, IoBookmarkSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { GoHomeFill } from "react-icons/go";
import { PiUsersThreeDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";
import { MdStorefront } from "react-icons/md";

// Search styling
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#F0F2F5",
  marginLeft: 12,
  width: "auto",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
    "&::placeholder": {
      color: "#8F9195",
      opacity: 1,
      fontSize: "14px",
    },
  },
}));

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      sx={{ marginTop: "32px" }}>
      <MenuItem onClick={handleMenuClose}>
        <CgProfile style={{ marginRight: "10px" }} /> Profile
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <IoSettingsOutline style={{ marginRight: "10px" }} /> Setting
      </MenuItem>
      <Link to="/Login" style={{ textDecoration: "none", color: "black" }}>
        <MenuItem onClick={handleMenuClose}>
          <MdLogout style={{ marginRight: "10px", color: "red" }} /> LogOut
        </MenuItem>
      </Link>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}>
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <RiMessengerFill size={22}/>
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit">
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit">
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  const icons = [
    { icon: MdOndemandVideo, label: "Videos" },
    { icon: MdStorefront, label: "Marketplace" },
    { icon: PiUsersThreeDuotone, label: "Groups" },
    { icon: LuGamepad, label: "Gaming" },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={appBarStyle}>
        <Toolbar sx={toolbarStyle}>
          {/* Logo */}
          <BsFacebook color="#0866FF" size={36} sx={{ display: { xs: 'none', md: 'block' } }} />

          {/* Search */}
          <Search sx={searchContainerStyle}>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: "#8F9195" }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search Facebook"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          {/* Middle Icons */}
          <Box
            sx={centerIconsBox}>
            {/* Active Icon (Home) */}
            <Tooltip title="Home">
              <IconButton
                sx={activeIconButton}>
                <GoHomeFill size={28} />
              </IconButton>
            </Tooltip>

            {/*  map for icons to display each icon  */}
            {icons.map(({ icon: Icon, label }, index) => (
              <Tooltip title={label} key={index}>
                <IconButton
                  sx={navIconButton}>
                  <Icon size={25} />
                </IconButton>
              </Tooltip>
            ))}
          </Box>

          {/* Right side icons */}
          <Box sx={desktopIcons}>
            {/* Messenger */}
            <IconButton size="large">
              <Badge badgeContent={4} color="error">
                <Box
                  sx={iconWrapper}>
                  <RiMessengerFill size={22} color="#080809" />
                </Box>
              </Badge>
            </IconButton>

            {/* Notifications */}
            <IconButton size="large">
              <Badge badgeContent={17} color="error">
                <Box
                  sx={iconWrapper}>
                  <NotificationsIcon style={{ color: "#080809" }} />
                </Box>
              </Badge>
            </IconButton>

            {/* Profile avatar */}
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}>
              <Avatar alt="profile img" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
            </IconButton>
          </Box>

          {/* Mobile menu */}
          <Box sx={mobileMenuIcon}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}>
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
