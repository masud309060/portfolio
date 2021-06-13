import { Box, Link, makeStyles, Typography } from '@material-ui/core';
import { Facebook, GitHub, LinkedIn, Twitter } from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles({
  footer: {
    backgroundColor: "#222",
    padding: "1rem 0 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: '1rem'
  },
  headLine: {
    margin: 0,
    fontFamily: "'Courgette', cursive",
    color: "tan",
  },
  socialMedia: {
    fontSize: "2.25rem",
    color: "tan",
    margin: "10px",
    padding: "0.25rem",
    border: "1px solid tan",
    transition: "0.3s",
    "&:hover": {
      transform: "scale(1.25)"
    }
  }
});

const Footer = () => {
  const classes = useStyles()
  return (
    <Box className={classes.footer}>
      <Typography className={classes.headLine} variant="h5">Follow me on</Typography>
      <Box style={{height: "60px", alignItems: "center"}}>
      <Link href="https://www.linkedin.com/in/masud309060/" target="_blank">
          <LinkedIn className={classes.socialMedia} />
        </Link>
        <Link href="https://github.com/masud309060" target="_blank">
          <GitHub className={classes.socialMedia} />
        </Link>
        <Link href="https://www.facebook.com/masud309060/" target="_blank">
          <Facebook className={classes.socialMedia} />
        </Link>
        <Link href="https://twitter.com/masud309060" target="_blank">
          <Twitter className={classes.socialMedia} />
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;