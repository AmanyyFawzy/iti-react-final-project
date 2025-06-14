export const mainContainerStyles = {
  display: "flex",
  justifyContent: "center",
  minHeight: "100vh",
  backgroundImage: `url(/src/assets/img-bg.jpeg)`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backdropFilter: "blur(6px)",
};

export const paperStyles = {
  p: 4,
  width: {
    md: "500px",
    xs: "90%",
  },
  borderRadius: 4,
  backgroundColor: "rgba(255,255,255,0.95)",
};
export const RegisterPaperStyles = {
  width: {
    xs: "90%",
    md: "800px",
  },
  my: '60px',
};

export const headingStyles = {
  fontWeight: "bold",
  color: "#1976d2",
  fontSize: {
    xs: "1.5rem",
    md: "2.125rem",
  },
};

export const subHeadingStyles = {
  mb: 2,
  color: "#555",
  textAlign: "center",
};

export const loginBtnStyles = {
  mt: 2,
  py: 1.2,
  fontWeight: "600",
  fontSize: "1rem",
  letterSpacing: "2px",
};

export const dividerLineStyles = {
  my: 3,
};

export const socialIconStyles = {
  color: "#333",
  transition: "0.3s",
  "&:hover": { color: "#000", transform: "scale(1.2)" },
};

export const googleIconStyles = {
  transition: "0.3s",
  "&:hover": { transform: "scale(1.2)" },
};

export const twitterIconStyles = {
  color: "#1DA1F2",
  transition: "0.3s",
  "&:hover": { color: "#0d8ddb", transform: "scale(1.2)" },
};
