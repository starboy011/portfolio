import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css"; // Importing CSS file if you need styling

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
    <form ref={form} onSubmit={sendEmail}>
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
                  placeholder="Name"
                  type="text"
                  name="user_name"
                  className="name"
                />
              </div>
              <div className="contentcontainer">
                <input
                  placeholder="Email"
                  type="email"
                  name="user_email"
                  className="email"
                />
              </div>
              <div className="contentcontainer">
                <textarea name="message" className="message" />
              </div>
              <div className="sendcontainer">
                <div className="beforesend"></div>
                <input type="submit" value="Send" className="send" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

// .sendForm("service_ye0fs09", "template_i9qoaru", form.current, {
//     publicKey: "DtuRo0tlW_Q5W7pk5",
