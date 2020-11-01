import React from 'react';
import Navbar from '../Navbar/Navbar';
import emailjs from 'emailjs-com';
import './Contact.css'

const Contact = () => {
  const sendEmail = e => {
    e.preventDefault();
    emailjs.sendForm('gmail', 'portfolio_4zv58', e.target, 'user_ot55pUKAbTXH7WSVQNAA1')
      .then((result) => {
          console.log(result.text);
          alert("Your message submit succesfully")
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }
  return (
    <div>
      <Navbar/>

      <div className="mainContainer">
        <form onSubmit={sendEmail}>
          <div className="formArea">
            <h2 className="form-heading">Hire Or Contact Me</h2>
            <div className="form-control">
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" id="name" placeholder="Your name / Company name"/>
            </div>
            <div className="form-control">
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" id="email" placeholder="Email"/>
            </div>
            <div className="form-control">
              <label htmlFor="messsage">Message:</label>
              <textarea type="text" name="message" id="message" placeholder="Message . . . "/>
            </div>
            <button type="submit" name="submit" className="submit-btn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;