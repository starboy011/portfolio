import React, { useEffect } from "react";
import "./Section.css"; // Import CSS file

const Section = () => {
  useEffect(() => {
    const sectionDivs = document.querySelectorAll(".section-div");

    const handleScroll = () => {
      sectionDivs.forEach((div, index) => {
        const rect = div.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 50;
        if (isVisible) {
          div.classList.add("animate");
          if (index === 0) {
            div.classList.add("animate-left");
          } else if (index === 1) {
            div.classList.add("animate-bottom");
          } else if (index === 2) {
            div.classList.add("animate-right");
          }
        } else {
          div.classList.remove(
            "animate",
            "animate-left",
            "animate-bottom",
            "animate-right"
          );
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    // Clean up
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="section-container">
      <div className="section-div-container">
        <div className="section-div">
          <div className="section-div-title">
            <p>Web Developer</p>
          </div>
        </div>
        <div className="section-div">
          <div className="section-div-title">
            <p>Android/IOS Developer</p>
          </div>
        </div>
        <div className="section-div">
          <div className="section-div-title">
            <p>Backend Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
