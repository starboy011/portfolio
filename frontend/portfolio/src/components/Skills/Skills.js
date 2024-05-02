import React, { useEffect } from "react";
import "./Skills.css";
import SkillBox from "./SkillBox";
import CPlusPlusImage from "./C++.png";
import CImage from "./C.png";
import GoImage from "./Go.png";
import JavaImage from "./Java.jpeg";
import PhpImage from "./Php.png";
import HtmlImage from "./Html.png";
import CssImage from "./Css.png";
import JavascriptImage from "./Javascript.png";
import ReactjsImage from "./Reactjs.png";
import ReactnativeImage from "./Reactnative.png";
import SqlImage from "./Sql.png";
import MongodbImage from "./Mongodb.png";
import RedisImage from "./Redis.png";
import KafkaImage from "./Kafka.png";
import GrafanaImage from "./Grafana.png";
import NewrelicImage from "./Newrelic.png";
import PostmanImage from "./Postman.png";
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
            "animate-bottom-right1",
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
          <div className="skillcontainer">
            <SkillBox image={CPlusPlusImage} title="C++" />
          </div>
          <div className="skillcontainer">
            <SkillBox image={CImage} title="C" />
          </div>
          <div className="skillcontainer">
            <SkillBox image={GoImage} title="Go" />
          </div>
          <div className="skillcontainer">
            <SkillBox image={JavaImage} title="Java" />
          </div>
          <div className="skillcontainer">
            <SkillBox image={PhpImage} title="Php" />
          </div>
        </div>
        <div className="row">
          <div className="skillcontainer">
            <SkillBox image={HtmlImage} title="Html" />
          </div>
          <div className="skillcontainer">
            <SkillBox image={CssImage} title="Css" />
          </div>
          <div className="skillcontainer">
            <SkillBox image={JavascriptImage} title="Java Script" />
          </div>
          <div className="skillcontainer">
            <SkillBox image={ReactjsImage} title="ReactJs" />
          </div>
          <div className="skillcontainer">
            <SkillBox image={ReactnativeImage} title="React Native" />
          </div>
        </div>
        <div className="row">
          <div className="skillcontainer">
            <SkillBox image={SqlImage} title="SQL" />
          </div>
          <div className="skillcontainer">
            <SkillBox image={MongodbImage} title="MongoDb" />
          </div>
          <div className="skillcontainer">
            <SkillBox image={RedisImage} title="Redis" />
          </div>
          <div className="skillcontainer">
            <SkillBox image={KafkaImage} title="Kafka" />
          </div>
          <div className="skillcontainer">
            <SkillBox image={GrafanaImage} title="Grafana" />
          </div>
        </div>
        <div className="row">
          <div className="skillcontainer">
            <SkillBox image={NewrelicImage} title="Newrelic" />
          </div>
          <div className="skillcontainer">
            <SkillBox image={PostmanImage} title="Postman" />
          </div>
          <div className="skillcontainer">
            <SkillBox image="path_to_your_image.jpg" title="Your Skill Title" />
          </div>
          <div className="skillcontainer">
            <SkillBox image="path_to_your_image.jpg" title="Your Skill Title" />
          </div>
          <div className="skillcontainer">
            <SkillBox image="path_to_your_image.jpg" title="Your Skill Title" />
          </div>
        </div>
        <div className="row">
          <div className="skillcontainer">
            <SkillBox image="path_to_your_image.jpg" title="Your Skill Title" />
          </div>
          <div className="skillcontainer">
            <SkillBox image="path_to_your_image.jpg" title="Your Skill Title" />
          </div>
          <div className="skillcontainer">
            <SkillBox image="path_to_your_image.jpg" title="Your Skill Title" />
          </div>
          <div className="skillcontainer">
            <SkillBox image="path_to_your_image.jpg" title="Your Skill Title" />
          </div>
          <div className="skillcontainer">
            <SkillBox image="path_to_your_image.jpg" title="Your Skill Title" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
