import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import {motion} from "framer-motion"
const Navbar = () => {
  return (
    <div className="navbar">
        <Sidebar/>
    <div className="wrapper">
        <motion.span 
        initial={{opacity:0, scale:0.5}} 
        animate={{opacity:1, scale:1}} 
        transition={{duration:0.5}}
        >
            Rishav Choudhary
        </motion.span>
        <div className="social">        
        <a href="#"><motion.img src="/github.jpg" alt="" 
        initial={{opacity:0, scale:0.5}} 
        animate={{opacity:1, scale:1}} 
        transition={{duration:0.5}}
        /></a>
        <a href="#"><motion.img src="/gfg.jpg" alt=""
        initial={{opacity:0, scale:0.5}} 
        animate={{opacity:1, scale:1}} 
        transition={{duration:1}}
        /></a>
        <a href="#"><motion.img src="/linkedin.jpg" alt=""
        initial={{opacity:0, scale:0.5}} 
        animate={{opacity:1, scale:1}} 
        transition={{duration:1.5}}
        /></a>
        <a href="#"><motion.img src="/instagram.png" alt=""
        initial={{opacity:0, scale:0.5}} 
        animate={{opacity:1, scale:1}} 
        transition={{duration:2}}
        /></a>
        <a href="#"><motion.img src="/facebook.png" alt=""
        initial={{opacity:0, scale:0.5}} 
        animate={{opacity:1, scale:1}} 
        transition={{duration:2.5}}
        /></a>
        </div>
    </div>
    </div>
  )
}

export default Navbar
