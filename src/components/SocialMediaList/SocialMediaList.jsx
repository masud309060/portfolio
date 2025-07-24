import React from "react";
import { Box, Link, styled } from "@mui/material";
import { Facebook, GitHub, LinkedIn, Twitter } from "@mui/icons-material";

// Styled social media icon
const SocialMediaIcon = styled("div")(() => ({
  "& .MuiSvgIcon-root": {
    fontSize: "2.25rem",
    color: "tomato",
    margin: "10px",
    transition: "1s",
    "&:hover": {
      transform: "rotate(360deg)",
    },
  },
}));

const SocialMediaList = () => {
  return (
    <Box
      sx={{
        height: "70px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Link
        href="https://www.linkedin.com/in/masud309060/"
        target="_blank"
        sx={{ display: "flex" }}
      >
        <SocialMediaIcon>
          <LinkedIn />
        </SocialMediaIcon>
      </Link>
      <Link
        href="https://github.com/masud309060"
        target="_blank"
        sx={{ display: "flex" }}
      >
        <SocialMediaIcon>
          <GitHub />
        </SocialMediaIcon>
      </Link>
      <Link
        href="https://www.facebook.com/masud309060/"
        target="_blank"
        sx={{ display: "flex" }}
      >
        <SocialMediaIcon>
          <Facebook />
        </SocialMediaIcon>
      </Link>
      <Link
        href="https://twitter.com/masud309060"
        target="_blank"
        sx={{ display: "flex" }}
      >
        <SocialMediaIcon>
          <Twitter />
        </SocialMediaIcon>
      </Link>
    </Box>
  );
};

export default SocialMediaList;
