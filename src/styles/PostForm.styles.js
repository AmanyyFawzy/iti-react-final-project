export const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  bgcolor: "rgba(0,0,0,0.5)",
  zIndex: 9999,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const paperStyle = {
  width: "90%",
  maxWidth: 500,
  p: 2,
  pt: 1,
  borderRadius: 3,
  position: "relative",
  backgroundColor: "#ffffff",
  boxShadow: 3,
};

export const headerStyle = {
  position: "relative",
  borderBottom: "1px solid #ddd",
  pb: 2,
  mb: 2,
};

export const titleStyle = {
  fontWeight: "bold",
  textAlign: "center",
  color: "#050505",
};

export const closeIconStyle = {
  position: "absolute",
  right: 0,
  top: 0,
  color: "#5B626A",
  background: "#DEDEE2",
};

export const postTitleInputStyle = {
  fontSize: "18px",
  borderRadius: 2,
  padding: 1,
  mb: 2,
  backgroundColor: "#f0f2f5",
};

export const imgUrlInputStyle = {
  backgroundColor: "#f0f2f5",
  borderRadius: 2,
  padding: 1,
  mb: 2,
};

export const submitButtonStyle = {
  textTransform: "none",
  fontSize: "18px",
  letterSpacing: "1.2px",
  backgroundColor: "#1877f2",
  borderRadius: "6px",
  "&:hover": {
    backgroundColor: "#166fe5",
  },
};