import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import {motion} from "framer-motion"
const Navbar = () => {
  return (
    <div className="navbar">
        {/* <Sidebar/> */}
    <div className="wrapper">
        <motion.span 
        initial={{opacity:0, scale:0.5}} 
        animate={{opacity:1, scale:1}} 
        transition={{duration:0.5}}
        >
            
        </motion.span>
        <div className="social">        
        <a href="https://github.com/starboy011"><motion.img src="/github.jpg" alt="" 
        initial={{opacity:0, scale:0.5}} 
        animate={{opacity:1, scale:1}} 
        transition={{duration:0.5}}
        /></a>
        <a href="https://www.geeksforgeeks.org/user/starboy081/"><motion.img src="/gfg.jpg" alt=""
        initial={{opacity:0, scale:0.5}} 
        animate={{opacity:1, scale:1}} 
        transition={{duration:1}}
        /></a>
        <a href="https://www.linkedin.com/in/rishavchoudhary081/"><motion.img src="/linkedin.jpg" alt=""
        initial={{opacity:0, scale:0.5}} 
        animate={{opacity:1, scale:1}} 
        transition={{duration:1.5}}
        /></a>
        <a href="https://drive.google.com/file/d/1zVsfLFCAYbumdlCqkAyi0ZN_G0Hqcjqk/view?usp=drive_link"><motion.img src="/drive.png" alt=""
        initial={{opacity:0, scale:0.5}} 
        animate={{opacity:1, scale:1}} 
        transition={{duration:2}}
        /></a>
        </div>
    </div>
    </div>
  )
}

export default Navbar
