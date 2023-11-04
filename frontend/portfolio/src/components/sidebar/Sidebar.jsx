import "./sidebar.scss"
import Links from "./links/Links"
import ToggleButton from "./toggleButton/ToggleButton"
import {motion} from "framer-motion"
const sidebar = () => {
  const [open,setOpen] = useState(false)
  const variants ={
    open:
    clesed: {
      clipPath: "circle(30px at 50px 50px)"
    }
  }
  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
    <motion.div className="bg" cariants={variants}>
        <Links/>
    </motion.div>
    <ToggleButton setOpen={setOpen}/>
    </motion.div>
  )
}

export default sidebar



