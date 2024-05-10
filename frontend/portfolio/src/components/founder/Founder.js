import React, { useEffect, useState } from "react";
import "./Founder.css";

const Founder = () => {
  const [isInView, setIsInView] = useState(false);

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
      <div className="foundercontainer1"></div>
    </div>
  );
};

export default Founder;
