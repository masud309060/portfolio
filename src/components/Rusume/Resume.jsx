import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Navbar from '../Navbar/Navbar';


const useStyles = makeStyles( theme => ({
  mainContianer: {
    backgroundColor: "#244",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      borderRight: "2px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both"
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto"
      }
    }
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute"
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)"
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato"
      }
    }
  },

  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    backgroundColor: "Tomato",
    padding: "0.5rem 0 1rem",
    lineHeight: 1,
    color: "white",
    "&:before": {
      display: "none"
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)":{
        float: "none",
        margin: "0 auto"
      },
      "&:nth-of-type(2n):before": {
        display: "none"
      }
    }
  },

  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase"
  },
  subHeading: {
    color: "white",
    padding: "0",
    textTransform: "uppercase"
  }
}))
const Resume = () => {
  const classes = useStyles()
  return (
    <div>
      <Navbar/>
        <Box component="header" className={classes.mainContianer}>
          <Typography variant="h4" className={classes.heading} align="center">
            Working Experiance
          </Typography>

          <Box component="div" className={classes.timeLine}>
            <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`} variant="h2">
              2017
            </Typography>
            <Box component="div" className={classes.timeLineItem}>
              <Typography 
              variant="h5" 
              className={classes.subHeading}
              >
                web design
              </Typography>
              <Typography variant="body1" style={{color: "tomato"}}>
                company name where worked
              </Typography>
              <Typography variant="subtitle1" style={{color: "tan"}}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem pariatur illo, sed, enim sapiente at optio sit quae, illum repellendus odit soluta eaque corrupti?
              </Typography>
            </Box>

            <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`} variant="h2">
              2017
            </Typography>
            <Box component="div" className={classes.timeLineItem}>
              <Typography 
              variant="h5" 
              className={classes.subHeading}
              >
                html & css
              </Typography>
              <Typography variant="body1" style={{color: "tomato"}}>
                company name where worked
              </Typography>
              <Typography variant="subtitle1" style={{color: "tan"}}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem pariatur illo, sed, enim sapiente at optio sit quae, illum repellendus odit soluta eaque corrupti?
              </Typography>
            </Box>

            <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`} variant="h2">
              2018-19
            </Typography>
            <Box component="div" className={classes.timeLineItem}>
              <Typography 
              variant="h5" 
              className={classes.subHeading}
              >
                JavaScript Full Stack
              </Typography>
              <Typography variant="body1" style={{color: "tomato"}}>
                company name where worked
              </Typography>
              <Typography variant="subtitle1" style={{color: "tan"}}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem pariatur illo, sed, enim sapiente at optio sit quae, illum repellendus odit soluta eaque corrupti?
              </Typography>
            </Box>

            <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`} variant="h2">
              2020 
            </Typography>
            <Box component="div" className={classes.timeLineItem}>
              <Typography 
              variant="h5" 
              className={classes.subHeading}
              >
                React | Redux 
              </Typography>
              <Typography variant="body1" style={{color: "tomato"}}>
                company name where worked
              </Typography>
              <Typography variant="subtitle1" style={{color: "tan"}}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem pariatur illo, sed, enim sapiente at optio sit quae, illum repellendus odit soluta eaque corrupti?
              </Typography>
            </Box>

            
          </Box>
        </Box>
    </div>
  );
};

export default Resume;