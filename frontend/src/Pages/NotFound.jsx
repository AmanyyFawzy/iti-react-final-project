import { Link } from "react-router-dom";
import { Box, Grid, Typography, Button } from "@mui/material";
import notFoundImg from "../assets/notfound-page.svg";
import {
  containerStyles,
  textGridStyles,
  titleStyles,
  subtitleStyles,
  buttonStyles,
  imageStyles,
  gridStyles
} from "../styles/NotFoundPage.style";

export default function NotFound() {
  return (
    <Box
      sx={containerStyles}>
      <Grid sx={gridStyles}
        container
        spacing={30}>

        {/* Text & Button */}
        <Grid
          item
          xs={12}
          md={7}
          sx={textGridStyles}>
          <Typography
            color="primary"
            sx={titleStyles}>
            Oooops!!
          </Typography>

          <Typography
            variant="h4"
            fontWeight="bold"
            sx={subtitleStyles}>
            it looks like you{"\n"} are lost in space
          </Typography>

          <Button
            variant="contained"
            component={Link}
            to="/home"
            sx={buttonStyles}>
            Get back to Home
          </Button>
        </Grid>

        {/* Image */}
        <Grid item xs={12} md={5}>
          <Box
            component="img"
            src={notFoundImg}
            alt="Page Not Found"
            sx={imageStyles}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
