import React from "react";
import { Box, Button, makeStyles, Typography } from "@material-ui/core";

const useStyle = makeStyles({
  blogItem: {
    maxWidth: "320px",
    width: "100%",
    margin: "1rem 0.5rem",
    border: "1px solid gray",
    padding: '0.5rem',
    transition: "0.3s",
    "&:hover": {
      border: "1px solid #ddd"
    }
  },
  headline: {
    color: "tomato",
    padding: "0.5rem 0",
    textTransform: "uppercase"
  },
  content: {
    color: 'tan',
  },
  media: {
    height: "200px",
    width: "100%",
  }
})

const BlogItem = ({blog}) => {
  const classes = useStyle();
  return (
    <Box className={classes.blogItem}>
      <img src={blog.image} alt="" className={classes.media} />
      <Typography variant="h5" className={classes.headline}>
        {blog.name}
      </Typography>
      <Typography component="p" className={classes.content}>
        {blog.description.slice(0, 110)} . . .
      </Typography>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "1rem",
        }}
      >
        <Button variant="contained" color="Secondary">
          read more
        </Button>
        <Button variant="contained" color="Primary">
          read more
        </Button>
      </Box>
    </Box>
  );
};

export default BlogItem;
