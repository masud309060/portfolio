import { Box, Button, Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Navbar from "../Navbar/Navbar";

const useStyles = makeStyles({
  rootContainer: {
    padding: "1rem 5rem",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  root: {
    maxWidth: 345,
    margin: "1rem",
    backgroundColor: "#444",
    border: "1px solid rgba(0,0,0,0.3)"
  },
  media: {
    height: 300,
  },
  brandBtn: {
    margin: ".5rem",
    padding: "0 .5rem",
    fontWeight:"bold",
    color: "#444"

  },
  header: {
    color: "tan",
    textAlign: "center",
    marginTop: "6.25rem",
    textTransform: "uppercase",
    width: "100%",
  },
  linkedBtn: {
    fontWeight: "bold",
    color: "tomato",
    width: "100%",
    marginBottom: ".5rem"
  }
});

const projectsData = [
  {
    name: "Volunteer Network",
    img: "https://i.ibb.co/7p34V8G/volunteer-network.png",
    website: "https://volunteer-network-d9618.web.app/",
    github: "https://github.com/masud309060/volunteer-network",
    description: "A non-profit social organization who works for different positive activities. For that they need some volunteers to maintain activities. people connect here by this site of his own free will. One will join more than one activities and work his available time.",
    technology: ["React", "Material-UI", "CSS3", "HTML5", "Node", "Express", 'MongoDB']
  },
  {
    name: "Creative Agency",
    img: "https://i.ibb.co/D4LpjFL/creative-agency.png",
    website: "https://creative-agency-17.web.app/",
    github: "https://github.com/masud309060/creative-agency-client",
    description: "A full stack dynamic service provider website who provides some services. They take clients projects at reasonable cost. Clients see their project what the condition it is.Clients confirms some status pending, on going, done etc. Anyone bye services and give his/her feedback which will show in the review section.There is an admin panel where an admin only adds services. An admin can add a new admin and maintain status.",
    technology: ["React", "Bootstrap", "CSS3", "HTML5", "Node", "Express", 'MongoDB']
  },
  {
    name: "Travel Guru",
    img: "https://i.ibb.co/rZDqpwg/travel-guru.png",
    website: "https://travel-guru-1db67.web.app/",
    github: "https://github.com/masud309060/travel-guru",
    description: "Basically a travel hotel booking site. Find best hotel package within reasonable range. You can select a place which will route you a new booking page. Then we can fixed the booking date. That will show some hotel and show the hotle location with google map.",
    technology: ["React", "Material-UI", "Bootstrap", "CSS3", "HTML5"]
  },
  {
    name: "Hot Gadgets",
    img: "https://i.ibb.co/LJ0F5M6/hot-gadget.png",
    website: "https://masud309060.github.io/hot-gadget/",
    github: "https://github.com/masud309060/hot-gadget",
    description: "An online sells market website homepage design. Clients need simple but effective design for their customer.",
    technology: ["Bootstrap", "CSS3", "HTML5"]
  },
  {
    name: "E- School",
    img: "https://i.ibb.co/SRbxrf0/e-school.png",
    website: "https://masud309060.github.io/e-school-courses/",
    github: "https://github.com/masud309060/e-school-courses",
    description: "An online based school website designed. Its a gorgeous looking simple site made by HTML5, pure CSS, and Bootstrap-4. ",
    technology: ["Bootstrap", "CSS3", "HTML5"]
  },
]

const Projects = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Box component="h1" className={classes.header} >
        <span style={{borderBottom: "1px solid tan", padding: ".5rem 3rem"}}>My Latest Projects</span>
      </Box>
      <Box component="div" className={classes.rootContainer}>
        {
          projectsData.map((item, key) => 
          <Card className={classes.root} key={key}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={item.img} 
              title="Contemplative Reptile"
            />
            <CardContent> 
              <Box>
                <Button 
                href={item.website} 
                target="_blank" 
                className={classes.linkedBtn} 
                variant="contained"
                >
                  Website
                </Button>
                <Button 
                href={item.github} 
                target="_blank" 
                className={classes.linkedBtn} 
                variant="contained"
                >
                  GitHub
                </Button>
              </Box>
              <Typography 
              style={{color: "tomato"}} 
              gutterBottom variant="h5" 
              component="h2">
                {item.name}
              </Typography>
              <Typography variant="body2" style={{color: "tan"}} component="p">
                {item.description}
              </Typography>
            </CardContent>
            <Box style={{margin:".5rem"}}>
              {
                item.technology.map((data, index) => 
                  <Button 
                  key={key}
                  variant="contained"
                  color="default"
                  size="small" 
                  className={classes.brandBtn}
                  >{data}</Button>
                )
              }
            </Box>
          </CardActionArea>
        </Card>
          )
        }

      </Box>
    </div>
  );
};

export default Projects;
