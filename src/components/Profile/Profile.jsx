import React from "react";
import avatar from "../../images/images/js-img-my.jpg";
import { Avatar, Box, Grid, Typography, styled } from "@mui/material";
import { ReactTyped } from "react-typed";

// Styled Avatar component
const MyAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(18),
  height: theme.spacing(18),
  margin: theme.spacing(1),
  border: "3px solid tan",
  opacity: 0.7,
}));

const Profile = () => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Grid container justifyContent="center">
        <MyAvatar src={avatar} alt="avatar" />
      </Grid>
      <Typography sx={{ color: "tomato", fontWeight: 500, mt: 2 }} variant="h4">
        <ReactTyped strings={["Md Masud Rana"]} typeSpeed={40} />
      </Typography>
      <br />
      <Typography sx={{ color: "tan", marginBottom: "1rem" }} variant="h5">
        <ReactTyped
          strings={["Web Design", "Web development", "MERN Stack"]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Profile;
