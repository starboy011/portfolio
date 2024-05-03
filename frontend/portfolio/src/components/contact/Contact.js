import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ye0fs09", "template_i9qoaru", form.current, {
        publicKey: "DtuRo0tlW_Q5W7pk5",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contactcontainer">
      <div className="formcontainer">
        <div className="contactimage">
          <div className="contacttitle">
            <p>I'd love to here from</p>
            <p1>YOU!</p1>
          </div>
        </div>
        <div className="form">
          <div className="heading">
            <div className="text">
              <p>Contact ME!</p>
            </div>
            <div className="effect"></div>
          </div>
          <div className="mail">
            <div className="contentcontainer">
              <input
                type="text"
                name="user_name"
                placeholder="Name"
                className="name"
              />
            </div>
            <div className="contentcontainer">
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                className="email"
              />
            </div>
            <div className="contentcontainer">
              <textarea name="message" className="message" />
            </div>
            <div className="sendcontainer">
              <div className="beforesend"></div>
              <p className="send">Send</p>
            </div>
          </div>
        </div>
      </div>
      {/* <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form> */}
    </div>
  );
};
