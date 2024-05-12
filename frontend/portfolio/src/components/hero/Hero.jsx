import "./hero.scss"
import {motion} from "framer-motion"
import hero from "./hero.png"
import scroll from "./scroll.png"
const textVariants = {
  initial:{
    x: -500,
    opacity:0,
  },
  animate:{
    x: 0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren: 0.2,
    },
  },
  scrollButton: {
    opacity:0,
    y:10,
    transition:{
      duration:2,
      repeat:Infinity
    }
  }
};

const sliderVariants = {
  initial:{
    x: 0,
  },
  animate:{
    x: "-200%",
    transition:{
      repeat: Infinity,
      repeatType:"mirror",
      duration:20,
    },
  },
};


const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
      <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
        <motion.h2 variants={textVariants}>Rishav Choudhary</motion.h2>
        <motion.h1 variants={textVariants}>Full Stack Developer</motion.h1>
        <motion.div variants={textVariants} className="buttons">
        </motion.div>
        <motion.img src={scroll} variants={textVariants} animate ="scrollButton" alt=""/>
      </motion.div>
      </div>
      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">Design, Develop, Deliver</motion.div>
      <div className="imageContainer">
        <img src={hero} alt="Loading"/>
      </div>
    </div>
  )
}

export default Hero
