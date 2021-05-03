import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    maxWidth: 360,
    margin: "1rem",
    backgroundColor: "#444",
    border: "1px solid rgba(0,0,0,0.3)",
  },
  media: {
    height: 240,
  },
  brandBtn: {
    margin: ".5rem",
    padding: "0 .5rem",
    fontWeight: "bold",
    color: "#444",
  },
  linkedBtn: {
    fontWeight: "bold",
    color: "tomato",
    width: "100%",
    marginBottom: ".5rem",
  },
});

const ProjectItem = ({ project }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={project.img} />
        <CardContent>
          <Box>
            <Button
              href={project.website}
              target="_blank"
              className={classes.linkedBtn}
              variant="contained"
            >
              Website
            </Button>
            <Button
              href={project.github}
              target="_blank"
              className={classes.linkedBtn}
              variant="contained"
            >
              GitHub
            </Button>
          </Box>
          <Typography style={{ color: "tomato" }} gutterBottom variant="h5">
            {project.name}
          </Typography>
          <Typography variant="body2" style={{ color: "tan" }} component="p">
            {project.description}
          </Typography>
        </CardContent>
        <Box style={{ margin: ".5rem" }}>
          {project.technology.map((data, index) => (
            <Button
              key={index}
              color="default"
              size="small"
              className={classes.brandBtn}
              variant="contained"
            >
              {data}
            </Button>
          ))}
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default ProjectItem;
