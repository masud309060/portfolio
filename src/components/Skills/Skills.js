import { Box, Chip, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyle = makeStyles({
  container: {
    margin: "1rem 0.5rem",
  },
  skills: {
    marginBottom: '1.5rem'
  },
  headline: {
    fontSize: "2rem",
    color: "tan",
    borderBottom: "2px solid tan",
    margin: '1rem 0'
  },
  icon: {
    margin: '.25rem',
    minWidth: '6rem',
    color: '#222222',
    fontWeight: 600,
    border: '1px solid #222222',
    transition: '0.3s',
    "&:hover": {
      transform: "scale(1.1)"
    }
  }
});

const skillsData = [
  {
    name: "Working Technology",
    technology: [
      "JavaScript",
      "React",
      "Redux",
      "Node.js",
      "Express",
      "MongoDB",
      "Bootstrap",
      "React-Bootstrap",
      "Material-UI",
      "Firebase",
      "Rest API",
      "SASS",
      "CSS3",
      "HTML5"
    ]
  },
  {
    name: 'Familiar Technology',
    technology: [
      "TypeScript",
      "Next.js",
      "MySQL"
    ]
  },
  {
    name: "Dev Tools",
    technology: [
      "VS Code",
      "Git",
      "Github",
      "Chrome dev tool",
      "Heroku",
      "Netlify",
      "Adobe photoshop",
      "Figma"
    ]
  }
];

const Skills = () => {
  const classes = useStyle();

  return (
    <Box className={classes.container}> 
      { skillsData.map((item, i) => 
        <Box key={i} className={classes.skills}>
          <Typography className={classes.headline}>{item.name}</Typography>
          { item?.technology.map((data, index) => 
          <Chip
          key={index}
          className={classes.icon}
          size="small"
          label={data}
          />
          )}
        </Box>
      )}
    </Box>
  );
};

export default Skills;
