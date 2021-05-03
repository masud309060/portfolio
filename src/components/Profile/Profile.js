import React from "react";
import Typed from 'react-typed';
import avatar from '../../images/images/avatar-masud.png'
import { Avatar, Box, Grid, makeStyles, Typography } from "@material-ui/core";

const useStyle = makeStyles(theme => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1)
  },
  title: {
    color: "tomato",
    fontWeight: "500"
  },
  subTitle: {
    color: "tan",
    marginBottom: "1rem"
  },
}))

const Profile = () => {
  const classes = useStyle();

  return (
    <Box>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="avatar" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Md Masud Rana"]} typeSpeed={40} />
      </Typography>
      <br />
      <Typography className={classes.subTitle} variant="h5">
        <Typed
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
