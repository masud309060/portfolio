import { Box, Typography, styled } from "@mui/material";
import React from "react";
import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";
import Skills from "../Skills/Skills";
import Footer from "../Footer/Footer";

const Headline = styled(Typography)(() => ({
  fontSize: "2.5rem",
  color: "tan",
  borderBottom: "1px solid tan",
  width: "100%",
  marginBottom: "1rem",
  marginTop: "4.2rem",
}));

const ContainerBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  maxWidth: "700px",
  width: "95%",
  margin: "auto auto",
  textAlign: "center",
  zIndex: 1,
}));

const About = () => {
  return (
    <>
      <Navbar />
      <ContainerBox>
        <Headline variant="h4">About Me</Headline>
        <Profile />
        <Typography
          sx={{ color: "#ccc", fontSize: "1.1rem", textAlign: "center" }}
        >
          To maintain a full time job working as a Web Developer to develop,
          maintain, design software. I am a passionate, enthusiastic and
          competent Web Developer who, over the years, has built up a diverse
          range of skills, qualities and attributes that guarantee I will
          perform highly in this web development sector. I have always been
          interested in programming and making awesome website projects. So, I
          choose that field of study and my profession.
        </Typography>
        <Skills />
      </ContainerBox>
      <Footer />
    </>
  );
};

export default About;
