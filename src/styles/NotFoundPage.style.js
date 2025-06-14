export const containerStyles = {
  px: 1,
  py: 3,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  backgroundColor: "#f9f9f9",
};

export const gridStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

export const textGridStyles = {
  textAlign: {
    xs: "center",
    md: "left",
  },
};

export const titleStyles = {
  mb: 2,
  whiteSpace: "pre-line",
  letterSpacing: ".5px",
  fontSize: "50px",
  fontWeight: 600,
  color: "primary.main",
};

export const subtitleStyles = {
  mb: 2,
  whiteSpace: "pre-line",
  lineHeight: "55px",
  letterSpacing: ".5px",
  fontSize: "45px",
  fontWeight: 600,
  color: "#05445E",
  my: 3,
};

export const buttonStyles = {
  textTransform: "none",
  borderRadius: 2,
  px: 3,
  py: 1.2,
  fontWeight: 600,
  letterSpacing: "0.8px",
  mt: 1,
  backgroundColor: "primary.main",
  "&:hover": {
    backgroundColor: "primary.dark",
  },
};

export const imageStyles = {
  width: "100%",
  maxWidth: 450,
  mx: "auto",
  display: "block",
};
