import { Box, Chip, Typography } from "@mui/material";
import React from "react";

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
      "HTML5",
    ],
  },
  {
    name: "Familiar Technology",
    technology: ["TypeScript", "Next.js", "MySQL"],
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
      "Figma",
    ],
  },
];

const Skills = () => {
  return (
    <Box sx={{ margin: "1rem 0.5rem" }}>
      {skillsData.map((item, i) => (
        <Box key={i} sx={{ marginBottom: "1.5rem" }}>
          <Typography
            sx={{
              fontSize: "2rem",
              color: "tan",
              borderBottom: "2px solid tan",
              margin: "1rem 0",
            }}
          >
            {item.name}
          </Typography>
          {item?.technology.map((data, index) => (
            <Chip
              key={index}
              size="small"
              label={data}
              sx={{
                margin: ".25rem",
                minWidth: "6rem",
                color: "#222222",
                fontWeight: 600,
                border: "1px solid #222222",
                backgroundColor: "tan",
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            />
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default Skills;
