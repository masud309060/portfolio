import React, { useState } from "react";
import { AppBar, Box, Divider, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography, Drawer } from "@mui/material";
import { Apps, ArrowBack, ContactMail, EmojiObjects, Home, Info } from "@mui/icons-material";
import { Link } from "react-router-dom";

// Menu items
const menuItems = [
  { listIcon: <Home />, listText: "Home", listPath: "/" },
  { listIcon: <Info />, listText: "About Me", listPath: "/about" },
  { listIcon: <Apps />, listText: "Projects", listPath: "/projects" },
  { listIcon: <EmojiObjects />, listText: "Blogs", listPath: "/blogs" },
  { listIcon: <ContactMail />, listText: "Contact", listPath: "/contact" },
];

const Navbar = () => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  const sideList = (slider) => (
    <Box
      sx={{
        width: 250,
        height: "100%",
        backgroundColor: "#511",
      }}
      onClick={toggleSlider(slider, false)}
    >
      <Divider />
      <List>
        {menuItems.map((isItem, key) => (
          <ListItem button key={key} component={Link} to={isItem.listPath}>
            <ListItemIcon sx={{ color: "tan" }}>
              {isItem.listIcon}
            </ListItemIcon>
            <ListItemText sx={{ color: "tan" }}>
              {isItem.listText}
              <Divider />
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box component="nav">
        <AppBar position="fixed" sx={{ backgroundColor: "#222", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          <Toolbar>
            <IconButton sx={{display: {xs: "inline", sm: "none"}}} onClick={toggleSlider("right", true)}>
              <ArrowBack sx={{ color: "tomato" }} />
            </IconButton>
            <Typography variant="h5" sx={{ color: "tan" }}>
              Portfolio
            </Typography>
            <Drawer anchor="right" open={state.right} onClose={toggleSlider("right", false)}>
              {sideList("right")}
            </Drawer>
          </Toolbar>
          
          <Toolbar>
            {menuItems.map((item, i) => (
              <Typography
                sx={{
                  textDecoration: "none",
                  color: "tan",
                  marginRight: "15px",
                  padding: "0 10px",
                  display: { xs: "none", sm: "inline" },
                }}
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
