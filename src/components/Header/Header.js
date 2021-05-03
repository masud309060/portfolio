import { Box, Button, Link, makeStyles } from "@material-ui/core";
import React from "react";
import { ArrowRight } from "@material-ui/icons";
import SocialMediaList from "../SocialMediaList/SocialMediaList";
import Profile from "../Profile/Profile";

const useStyles = makeStyles({
  typedContainer: {
    width: "100%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    zIndex: 1,
  },
});

const Header = () => {
  const classes = useStyles();
  const resumeLink =
    "https://drive.google.com/uc?export=download&id=1uxGakGE77LHtMszMqhzihuevNum496Wg";

  return (
    <Box className={classes.typedContainer}>
      <Profile />
      <SocialMediaList />
      <Box>
        <Link href={resumeLink}>
          <Button
            variant="outlined"
            style={{ color: "tan", border: "1px solid tan" }}
          >
            Download Resume <ArrowRight />
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Header;
