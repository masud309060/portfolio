import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Profile from "../Profile/Profile";
import Skills from "../Skills/Skills";

const useStyles = makeStyles({
  headline: {
    fontSize: "2.5rem",
    color: "tan",
    borderBottom: "1px solid tan",
    width: '100%',
    marginBottom: "1rem",
    marginTop: "4.2rem",
  },

  typedContainer: {
    display: "flex",
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    maxWidth: "700px",
    width: "95%",
    margin: "auto auto",
    textAlign: "center",
    zIndex: 1,
  },
  description: {
    color: "#ccc",
    fontSize: "1.1rem",
    textAlign: "center",
  },
});

const About = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar></Navbar>
      <Box className={classes.typedContainer}>
        <Typography className={classes.headline}>About Me</Typography>
        <Profile />
        <Typography className={classes.description}>
          To maintain a full time job working as a junior web developer to
          develop, maintain, design software. I have always been interested in
          programming and making awesome website projects. So, I choose that
          field of study and my profession.
        </Typography>
        <Skills />
      </Box>
      <Footer />
    </>
  );
};

export default About;
