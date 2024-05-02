import React from "react";
import "./SkillBox.css";

const SkillBox = (props) => {
  const { image, title } = props;

  return (
    <>
      <div className="image" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="title">{title}</div>
    </>
  );
};

export default SkillBox;
