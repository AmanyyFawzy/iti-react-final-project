export const appBarStyle = {
  background: "#ffffff",
  height: 55,
  boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
  position:"fixed"
};

export const toolbarStyle = {
  height: 55,
  minHeight: "55px !important",
  px: 1,
};

export const searchContainerStyle = {
  borderRadius: "30px",
  color: "black",
};

export const centerIconsBox = {
  display: { xs: "none", md: "flex" },
  justifyContent: "center",
  alignItems: "center",
  gap: 5,
  flexGrow: 1,
  maxWidth: 600,
  mx: "auto",
  ml: 5,
  mt: 1,
};

export const activeIconButton = {
  color: "#0866FF",
  borderBottom: "3px solid #0866FF",
  borderRadius: 0,
  width: "100px",
};

export const navIconButton = {
  color: "#606770",
  width: "70px",
  borderRadius: "0px",
  "&:hover": {
    backgroundColor: "#F0F2F5",
    borderRadius: "10px",
  },
};

export const iconWrapper = {
  backgroundColor: "#E2E5E9",
  padding: "7px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const mobileMenuIcon = {
  display: { xs: "flex", md: "none" },
  ml: "auto",
};

export const desktopIcons = {
  display: { xs: "none", md: "flex" },
};
