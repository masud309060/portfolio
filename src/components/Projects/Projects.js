import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { projects } from "../../data.json";
import ProjectItem from "./ProjectItem";

const useStyles = makeStyles({
  rootContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: "4rem",
    alignItems: "center",
  },
  headline: {
    color: "tan",
    borderBottom: "2px solid tan",
    minWidth: "300px",
    textAlign: "center",
    margin: "1rem 0",
  },
  projects: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    maxWidth: "1200px",
    width: "100%",
  },
});

const Projects = () => {
  const classes = useStyles();

  return (
    <Box className={classes.rootContainer}>
      <Navbar />
      <Typography className={classes.headline} variant="h4">
        My Projects
      </Typography>
      <Box component="div" className={classes.projects}>
        {projects.map((item, key) => (
          <ProjectItem project={item} key={key} />
        ))}
      </Box>
      <Footer />
    </Box>
  );
};

export default Projects;
