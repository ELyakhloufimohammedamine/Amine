import {motion} from "framer-motion"
import { useState } from "react"
const Test = () => {

    const variants = {
        visible:{opacity:1 , x:800, transition:{type:"spring" , stiffness:100, damping:100}},
        hidden:{opacity:0}

    }
    const [open, setOpen] = useState(false)


    const items = [
        "item1","item2","item3","item4"
    ]

  return (
    <div className="course">
        <motion.ul>
            
            <motion.li></motion.li>
        </motion.ul>
    </div>
  )
}

export default Test