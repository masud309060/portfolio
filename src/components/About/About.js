import { Avatar, Box, Button, Grid, Link, makeStyles, Typography } from '@material-ui/core';
import avatar from '../../images/images/avatar-masud.png'
import React from 'react';
import Typed from 'react-typed';
import Navbar from '../Navbar/Navbar';
import { Facebook, GitHub, LinkedIn } from '@material-ui/icons';


const coreSkills = ["JavaScript", "ES-6", "React", "Bootstrap-4", "React Bootstrap","Material-UI", "CSS3", "HTML5","VS Code", "Git","Firebase", "React Routing", "React Hook Form validation", "Netlify" ]

const familiarSkills = ["Node", "Express", "MongoDB", "Heroku","Database", "Algorithm"]



const useStyles = makeStyles(theme => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1)
  },
  headline: {
    fontSize: "2.5rem",
    color: "tan",
    borderBottom: "1px solid tan",
    marginBottom: "1rem"
  },
  title: {
    color: "tomato",
    fontWeight: "500"
  },
  subTitle: {
    color: "tan",
    marginBottom: "1rem"
  },
  typedContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    maxWidth: "700px",
    margin: "auto auto",
    textAlign: "center",
    zIndex: 1
  },
  description: {
    color: "#ccc",
    fontSize: "1.1rem"
  },
  socialMedia: {
    fontSize: "2.25rem",
    color: "tomato",
    margin: "10px",
    transition: "1s",
    "&:hover": {
      transform: "rotate(360deg)"
    }
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "80vh",
    maxWidth: "600px",
    margin: "auto auto"
  },
  heading2: {
    fontSize: "2rem",
    color: "tan",
    borderBottom: "1px solid tan",
    padding: ".5rem 5rem",
    margin: "2rem"
    
  },
  brandBtn: {
    color: "#511",
    borderRadius: "0px 8px 0 8px",
    margin: "5px",
    fontWeight: 600,
  }
}));

const About = () => {
  const classes = useStyles()
  return (
    <div>
      <Navbar></Navbar>

        <Box className={classes.typedContainer}>
          <Box>
          <Typography className={classes.headline}>About Me</Typography>
        <Grid container justify="center">
          <Avatar className={classes.avatar} src={avatar} alt="avatar" />
        </Grid>
        <Typography className={classes.title} variant="h4">
          <Typed strings={["Md Masud Rana"]} typeSpeed={40} />
        </Typography>
        <br/>
        <Typography className={classes.subTitle} variant="h5">
          <Typed 
          strings={["Web Design","Web development","MERN Stack"]} 
          typeSpeed={40} 
          backSpeed={50}
          loop 
          />
        </Typography>
        <Box style={{height: "70px", alignItems: "center"}}>
          <Link href="https://www.linkedin.com/in/masud309060/" target="_blank">
            <LinkedIn className={classes.socialMedia}/>
          </Link>
          <Link href="https://github.com/masud309060" target="_blank">
            <GitHub className={classes.socialMedia}/>
          </Link>
          <Link href="https://www.facebook.com/designermmr/"  target="_blank">
            <Facebook className={classes.socialMedia}/>
          </Link>
        </Box>
        <Typography className={classes.description}>
        To maintain a full time job working as a junior web developer to develop, maintain, design software. I have  always been interested in programming and making awesome website projects. So, I choose that field of  study and my profession.  
        </Typography>
          </Box>
      </Box>
      <Box className={classes.container}>
        <Typography className={classes.heading2}>
          My Core Skills
        </Typography>
        <Box>
          {
            coreSkills.map((item, key) => 
            <>
              <Button 
              size="small" 
              variant="contained" 
              key={key}
              className={classes.brandBtn}
              > 
                {item}
              </Button>
            </>
            )
          }
        </Box>
        <Typography className={classes.heading2}>
          Familiar
        </Typography>
        <Box>
          {
            familiarSkills.map((item, key) => 
            <>
              <Button 
              size="small" 
              variant="contained" 
              key={key}
              className={classes.brandBtn}
              > 
                {item}
              </Button>
            </>
            )
          }
        </Box>
      </Box>
    </div>
  );
};

export default About;