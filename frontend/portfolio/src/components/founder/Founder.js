import React, { useEffect, useState } from "react";
import "./Founder.css";

const Founder = () => {
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    const sectionDivs = document.querySelectorAll(".screenshot");

    const handleScroll = () => {
      sectionDivs.forEach((div, index) => {
        const rect = div.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        if (isVisible) {
          div.classList.add("animate");
          const classesToAdd = [
            "animate-right1",
            "animate-right2",
            "animate-right3",
            "animate-right4",
            "animate-right5",
            "animate-right6",
          ];
          div.classList.add(classesToAdd[index]);
        } else {
          div.classList.remove(
            "animate",
            "animate-right1",
            "animate-right2",
            "animate-right3",
            "animate-right4",
            "animate-right5",
            "animate-right6"
          );
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    // Clean up
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(".foundercontainer");
      const viewportHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < viewportHeight * 1) {
        setIsInView(true);
      } else {
        setIsInView(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`foundercontainer ${isInView ? "scroll" : ""}`}>
      <div className="foundercontainer1">
        <div className="erpximagecontainer">
          <div className="screenshot"></div>
          <div className="screenshot"></div>
          <div className="screenshot"></div>
          <div className="screenshot"></div>
          <div className="screenshot"></div>
          <div className="screenshot"></div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
