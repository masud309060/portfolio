import React from "react";
import { ArrowRight } from "@mui/icons-material";
import { Box, Button, Link } from "@mui/material";
import Profile from "../Profile/Profile";
import SocialMediaList from "../SocialMediaList/SocialMediaList";

const Header = () => {
  const resumeLink =
    "https://drive.google.com/uc?export=download&id=1uxGakGE77LHtMszMqhzihuevNum496Wg";

  return (
    <Box
      sx={{
        width: "100%",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        zIndex: 1,
      }}
    >
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
