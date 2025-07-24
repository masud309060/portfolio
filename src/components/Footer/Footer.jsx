import React from "react";
import { Box, Link, Typography, styled } from "@mui/material";
import { Facebook, GitHub, LinkedIn, Twitter } from "@mui/icons-material";

const Container = styled(Box)(() => ({
  backgroundColor: "#222",
  padding: "1rem 0 0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  marginTop: "1rem",
}));

const SocialMediaIcon = styled("div")(() => ({
  "& .MuiSvgIcon-root": {
    fontSize: "2.25rem",
    color: "tan",
    margin: "10px",
    padding: "0.25rem",
    border: "1px solid tan",
    transition: "0.3s",
    "&:hover": {
      transform: "scale(1.25)",
    },
  },
}));

const Footer = () => {
  return (
    <Container>
      <Typography
        variant="h5"
        sx={{
          margin: 0,
          fontFamily: "'Courgette', cursive",
          color: "tan",
        }}
      >
        Follow me on
      </Typography>
      <Box
        sx={{
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link href="https://www.linkedin.com/in/masud309060/" target="_blank">
          <SocialMediaIcon>
            <LinkedIn />
          </SocialMediaIcon>
        </Link>
        <Link href="https://github.com/masud309060" target="_blank">
          <SocialMediaIcon>
            <GitHub />
          </SocialMediaIcon>
        </Link>
        <Link href="https://www.facebook.com/masud309060/" target="_blank">
          <SocialMediaIcon>
            <Facebook />
          </SocialMediaIcon>
        </Link>
        <Link href="https://twitter.com/masud309060" target="_blank">
          <SocialMediaIcon>
            <Twitter />
          </SocialMediaIcon>
        </Link>
      </Box>
    </Container>
  );
};

export default Footer;
