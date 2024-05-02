import React, { useEffect } from "react";
import "./Skills.css";
const Skills = () => {
  useEffect(() => {
    const sectionDivs = document.querySelectorAll(".skillcontainer");

    const handleScroll = () => {
      sectionDivs.forEach((div, index) => {
        const rect = div.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 50;
        if (isVisible) {
          div.classList.add("animate");
          const classesToAdd = [
            "animate-top-right1",
            "animate-bottom-left1",
            "animate-top-right1",
            "animate-bottom-left1",
            "animate-top-right1",
            "animate-top-left1",
            "animate-top-right1",
            "animate-bottom-right1",
            "animate-top-left1",
            "animate-top-left1",
            "animate-bottom-right1",
            "animate-bottom-right1",
            "animate-top-left1",
            "animate-top-right1",
            "animate-bottom-left1",
            "animate-bottom-left1",
            "animate-top-right1",
            "animate-bottom-left1",
            "animate-top-left1",
            "animate-bottom-right1",
            "animate-top-left1",
            "animate-top-left1",
            "animate-top-right1",
            "animate-bottom-right1",
            "animate-top-right1",
          ];
          div.classList.add(classesToAdd[index]);
        } else {
          div.classList.remove(
            "animate",
            "animate-left1",
            "animate-bottom1",
            "animate-right1",
            "animate-top1",
            "animate-top-left1",
            "animate-top-right1",
            "animate-bottom-left1",
            "animate-bottom-right1"
          );
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    // Clean up
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container">
      <div className="skilltitlecontainer">
        <p>SKILLS!</p>
      </div>
      <div className="body">
        <div className="row">
          <div className="skillcontainer"></div>
          <div className="skillcontainer"></div>
          <div className="skillcontainer"></div>
          <div className="skillcontainer"></div>
          <div className="skillcontainer"></div>
        </div>
        <div className="row">
          <div className="skillcontainer"></div>
          <div className="skillcontainer"></div>
          <div className="skillcontainer"></div>
          <div className="skillcontainer"></div>
          <div className="skillcontainer"></div>
        </div>
        <div className="row">
          <div className="skillcontainer"></div>
          <div className="skillcontainer"></div>
          <div className="skillcontainer"></div>
          <div className="skillcontainer"></div>
          <div className="skillcontainer"></div>
        </div>
        <div className="row">
          <div className="skillcontainer"></div>
          <div className="skillcontainer"></div>
          <div className="skillcontainer"></div>
          <div className="skillcontainer"></div>
          <div className="skillcontainer"></div>
        </div>
        <div className="row">
          <div className="skillcontainer"></div>
          <div className="skillcontainer"></div>
          <div className="skillcontainer"></div>
          <div className="skillcontainer"></div>
          <div className="skillcontainer"></div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
