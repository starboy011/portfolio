import React, { useEffect } from "react";
import "./Section.css";

const Section = () => {
  useEffect(() => {
    const sectionDivs = document.querySelectorAll(".section-div");

    const handleScroll = () => {
      sectionDivs.forEach((div, index) => {
        const rect = div.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight + 100;
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
      <div>
        <div className="section-title">
          Gather 'round, folks, for the epic tale of ME!
        </div>
        <div className="section-div-container">
          <div className="section-div">
            <div className="section-div-title">
              <p>Web Developer</p>
            </div>
            <div className="section-div-body">
              <li>
                Proficient in developing dynamic web applications using
                cutting-edge technologies, including React.js, HTML, CSS, and
                JavaScript.
              </li>
              <li>
                Demonstrated expertise in leveraging the latest frontend
                frameworks to build responsive and interactive user interfaces.
              </li>
              <li>
                Passionate about staying updated with emerging trends and
                technologies in the web development landscape.
              </li>
            </div>
          </div>
          <div className="section-div">
            <div className="section-div-title">
              <p>Android/IOS Developer</p>
            </div>
            <div className="section-div-body">
              <li>
                Experienced in crafting cross-platform mobile applications for
                both Android and iOS using React Native framework.
              </li>
              <li>
                Skilled in harnessing the power of React Native to create
                seamless and performant user experiences.
              </li>
              <li>
                Proficient in integrating native device functionalities and
                leveraging SDKs for enhanced app capabilities.
              </li>
              <li>
                Well-versed in version control systems for collaborative
                development and ensuring code stability across platforms.
              </li>
            </div>
          </div>
          <div className="section-div">
            <div className="section-div-title">
              <p>Backend Developer</p>
            </div>
            <div className="section-div-body">
              <li>
                Specialized in architecting and implementing robust backend
                solutions, leveraging microservices architecture for scalability
                and flexibility.
              </li>
              <li>
                Proficient in building backend systems using languages such as
                Go, Java, and C++, ensuring optimal performance and reliability.
              </li>
              <li>
                Experienced in tackling complex requirements and designing
                tailored solutions to meet business needs effectively.
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
