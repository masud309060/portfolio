import { AppBar, Avatar, Box, Divider, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from "@material-ui/core";
import { Apps, ArrowBack, ContactMail, EmojiObjects, Home, Info } from "@material-ui/icons";
import React, { useState } from "react";
import avatar from "../../images/images/avatar-masud.png";
import {Link} from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import MobilRightMenuSlider from '@material-ui/core/Drawer';

// CSS Styles 
const useStyles = makeStyles(theme => ({
  menuSliderContainer: {
    width: 250,
    height: '100%',
    backgroundColor: '#511',
  },
  avatar: {
    display: "block",
    margin: ".5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "tan",
  }
}));

const menuItems = [
  {
    listIcon: <Home/>,
    listText: "Home",
    listPath: "/"
  },
  {
    listIcon: <EmojiObjects/>,
    listText: "Blogs",
    listPath: "/blogs"
  },
  {
    listIcon: <Apps/>,
    listText: "Projects",
    listPath: "/projects"
  },
  {
    listIcon: <Info/>,
    listText: "About Me",
    listPath: "/about"
  },
  {
    listIcon: <ContactMail/>,
    listText: "Contact",
    listPath: "/contact"
  },
]

const Navbar = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    right: false
  })

  const toggleSlider = ((slider, open) => () => {
    setState({...state, [slider]: open})
  })

  const sideList = slider => (
      <Box className={classes.menuSliderContainer} 
      component="div"
      onClick={toggleSlider("right", false)} 
      >
        <Avatar className={classes.avatar} src={avatar} alt="avatar"/>
        <Divider/>
        
        <List>
          {
            menuItems.map((isItem, key)=> (
              <ListItem button key={key} component={Link} to={isItem.listPath}>
                <ListItemIcon className={classes.listItem}>
                  {isItem.listIcon} 
                </ListItemIcon>
          
                <ListItemText className={classes.listItem}>
                  {isItem.listText}
                <Divider/>
                </ListItemText>
              </ListItem>
            ))
          }
        </List>
      </Box>
  )
  
  return (
    <>
      <Box component="nav">
        <AppBar position="fixed" style={{ backgroundColor: "#222" }}>
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
              <ArrowBack style={{ color: "tomato" }} />
            </IconButton>
            <Typography variant="h5" style={{color:"tan"}}>
              Portfolio
            </Typography>
            <MobilRightMenuSlider 
            anchor="right" 
            open={state.right}
            onClose={toggleSlider("right", false)} 
            >
              {sideList("right")}
            </MobilRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
