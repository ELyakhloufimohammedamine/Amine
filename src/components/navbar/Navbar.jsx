import Sidebar from "./sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          
        </motion.span>
        <div className="social">
        <a href="https://www.linkedin.com/in/mohammed-amine-el-yakhlofi-0182a1233/"><img src="/Linkdin.png"></img></a>
                <a href="https://github.com/ELyakhloufimohammedamine"><img src="/github.png"></img></a>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;