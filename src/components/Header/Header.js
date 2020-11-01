import { Avatar, Box, Button, Grid, Link, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import avatar from "../../images/images/avatar-masud.png";
import Typed from 'react-typed';
import { ArrowRight } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
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
    marginBottom: "3rem"
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    zIndex: 1
  }
}))

const Header = () => {
  const classes = useStyles();
  const resumeLink = "https://drive.google.com/uc?export=download&id=1uxGakGE77LHtMszMqhzihuevNum496Wg";

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="avatar" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Md Masud Rana"]} typeSpeed={40} />
      </Typography>
      <br/>
      <Typography className={classes.subTitle} variant="h5">
        <Typed 
        strings={["Web Design","Web development","MERN Stack"]} 
        typeSpeed={40}   
        backSpeed={50}
        loop 
        />
      </Typography>
      <Box>
        <Link href={resumeLink}>
          <Button variant="outlined" style={{color:"tan",border:"1px solid tan"}}>
            Download Resume <ArrowRight/>
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Header;
