import {
  AppBar,
  // Avatar,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@material-ui/core";
import {
  Apps,
  ArrowBack,
  ContactMail,
  EmojiObjects,
  Home,
  Info,
} from "@material-ui/icons";
import React, { useState } from "react";
// import avatar from "../../images/images/avatar-masud.png";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import MobilRightMenuSlider from "@material-ui/core/Drawer";

const useStyles = makeStyles((theme) => ({
  rootNav: {
    backgroundColor: "#222",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  navItem: {
    textDecoration: "none",
    color: "tan",
    marginRight: "15px",
    padding: "0 10px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  menuSliderContainer: {
    width: 250,
    height: "100%",
    backgroundColor: "#511",
  },
  arrowBack: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  avatar: {
    display: "block",
    margin: ".5rem auto",
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  listItem: {
    color: "tan",
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/",
  },
  {
    listIcon: <Info />,
    listText: "About Me",
    listPath: "/about",
  },
  {
    listIcon: <Apps />,
    listText: "Projects",
    listPath: "/projects",
  },
  {
    listIcon: <EmojiObjects />,
    listText: "Blogs",
    listPath: "/blogs",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contact",
    listPath: "/contact",
  },
];

const Navbar = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    right: false,
  });

  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  const sideList = (slider) => (
    <Box
      className={classes.menuSliderContainer}
      component="div"
      onClick={toggleSlider("right", false)}
    >
      {/* <Avatar className={classes.avatar} src={avatar} alt="avatar" /> */}
      <Divider />

      <List>
        {menuItems.map((isItem, key) => (
          <ListItem button key={key} component={Link} to={isItem.listPath}>
            <ListItemIcon className={classes.listItem}>
              {isItem.listIcon}
            </ListItemIcon>

            <ListItemText className={classes.listItem}>
              {isItem.listText}
              <Divider />
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  // return component ----------------------------------------------------->>>>>>>
  return (
    <>
      <Box component="nav">
        <AppBar position="fixed" className={classes.rootNav}>
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
              <ArrowBack
                className={classes.arrowBack}
                style={{ color: "tomato" }}
              />
            </IconButton>
            <Typography variant="h5" style={{ color: "tan" }}>
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
          <Toolbar>
            {menuItems.map((item, i) => (
              <Typography
                className={classes.navItem}
                component={Link}
                to={item.listPath}
                key={i + 5}
              >
                {item.listText}
              </Typography>
            ))}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
