import { Box, Link, makeStyles } from "@material-ui/core";
import { Facebook, GitHub, LinkedIn, Twitter } from "@material-ui/icons";
import React from "react";


const useStyles = makeStyles({
  socialMedia: {
    fontSize: "2.25rem",
    color: "tomato",
    margin: "10px",
    transition: "1s",
    "&:hover": {
      transform: "rotate(360deg)"
    }
  },
});

const SocialMediaList = () => {
  const classes = useStyles();

  return (
    <div>
      <Box style={{ height: "70px", alignItems: "center" }}>
        <Link href="https://www.linkedin.com/in/masud309060/" target="_blank">
          <LinkedIn className={classes.socialMedia} />
        </Link>
        <Link href="https://github.com/masud309060" target="_blank">
          <GitHub className={classes.socialMedia} />
        </Link>
        <Link href="https://www.facebook.com/designermmr/" target="_blank">
          <Facebook className={classes.socialMedia} />
        </Link>
        <Link href="https://twitter.com/masud600300" target="_blank">
          <Twitter className={classes.socialMedia} />
        </Link>
      </Box>
    </div>
  );
};

export default SocialMediaList;
