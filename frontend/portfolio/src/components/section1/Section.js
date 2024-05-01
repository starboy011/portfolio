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
        } else {
          div.classList.remove("animate");
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
        <div className="section-div"></div>
        <div className="section-div"></div>
        <div className="section-div"></div>
      </div>
    </div>
  );
};

export default Section;
