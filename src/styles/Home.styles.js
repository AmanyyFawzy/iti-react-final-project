export const mainContainerStyles = {
  backgroundColor: "#f0f2f5",
  py: 3,
  minHeight: "100vh",
  marginTop: "55px",
};

export const paperStyles = {
  display: "flex",
  flexDirection: "column",
  gap: 2,
  p: 2,
  width: { xs: "94%", sm: "80%", md: 570 },
  mx: "auto",
  borderRadius: 3,
  backgroundColor: "white",
};

export const topBoxStyles = {
  display: "flex",
  alignItems: "center",
  gap: 2,
};

export const bottomActionsStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

export const actionBtnStyles = {
  color: "#606770",
  textTransform: "none",
  fontWeight: 500,
  flex: 1,
  justifyContent: "center",
};

export const textFieldStyles = {
  backgroundColor: "#f0f2f5",
  borderRadius: "30px",
  "& .MuiOutlinedInput-root": {
    borderRadius: "30px",
    "& fieldset": { border: "none" },
    "&:hover fieldset": { border: "none" },
    "&.Mui-focused fieldset": { border: "none" },
    "& input::placeholder": {
      color: "#65686c",
      opacity: 1,
      fontSize: "15px",
    },
  },
};
