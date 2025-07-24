import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Navbar from "../Navbar/Navbar";
import BlogItem from "./BlogItem";
import { blogs } from '../../data.json';
import Footer from "../Footer/Footer";

const useStyles = makeStyles({
  blogs: {
    marginTop: "4rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    justifyContent: "space-between"
  },
  headline: {
    color: "tan",
    borderBottom: "2px solid tan",
    minWidth: "300px",
    textAlign: "center",
    margin: "1rem 0",
  },
  blogContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});

const Blogs = () => {
  const classes = useStyles();

  return (
    <Box className={classes.blogs}>
      <Navbar />
      <Typography variant="h4" className={classes.headline}>Blogs</Typography>
      <Box className={classes.blogContainer}>
        { blogs.map(item => <BlogItem blog={item} /> )}
      </Box>
      <Footer /> 
    </Box>
  );
};

export default Blogs;
