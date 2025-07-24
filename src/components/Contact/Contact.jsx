import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import emailjs from "emailjs-com";
import { SendOutlined } from "@material-ui/icons";
import {
  Box,
  Button,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "92%",
    },
    width: "100%",
    maxWidth: "360px",
    margin: "1rem",
    backgroundColor: "#ecf0f1",
    boxShadow: "-2px 5px 10px rgba(0, 0, 0, 0.5)",
  },
  contact: {
    minHeight: "90vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "4rem"
  },
  headline: {
    backgroundColor: "#c51162",
    padding: "1rem 1.5rem",
    color: "#fff",
    fontWeight: 600,
  },
  root_body: {
    padding: "1rem",
  },
  button: {
    margin: theme.spacing(1),
    width: "92%",
  },
}));

const Contact = () => {
  const classes = useStyles();
  const [user, setUser] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const sendEmail = (e) => {
    e.preventDefault();
    try {
      if(user.name && user.email && user.message) {
        emailjs
        .sendForm(
          "gmail",
          "portfolio_4zv58",
          e.target,
          "user_ot55pUKAbTXH7WSVQNAA1"
        )
        .then(
          (result) => {
            alert("Your message submit succesfully");
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target.reset();
      setUser(null)

      } else if(!user.name) {
        throw Error("Name value is required")
      } else if(!user.email) {
        throw Error("Email value is required")
      } else if(!user.message) {
        throw Error("Message value is required")
      }
    } catch(e) {
      alert(e.message)
    }
  };

  return (
    <div>
      <Navbar />
      <Box className={classes.contact}>
        <form
          onSubmit={sendEmail}
          className={classes.root}
          noValidate
          autoComplete="off"
        >
          <Typography variant="h5" className={classes.headline}>
            Hire or Contact Me
          </Typography>
          <Box className={classes.root_body}>
            <TextField
              required
              name="name"
              onChange={handleChange}
              id="outlined-required"
              label="Name"
              placeholder="Enter your name"
              variant="outlined"
            />
            <br />
            <TextField
              required
              name="email" 
              onChange={handleChange}
              id="outlined-required"
              label="Email"
              placeholder="Enter your email"
              variant="outlined"
            />
            <br />
            <TextField
              required
              name="message" 
              onChange={handleChange}
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={4} 
              placeholder="Write your message"
              variant="outlined"
            />
            <br />
            <Button 
              variant="contained"
              color="Secondary"
              className={classes.button}
              endIcon={<SendOutlined />} 
              type="submit"
            >
              Send
            </Button>
          </Box>
        </form>
      </Box>
      <Footer /> 
    </div>
  );
};

export default Contact;