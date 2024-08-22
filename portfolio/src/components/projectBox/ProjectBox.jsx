import "./projectBox.css";
import { GoLinkExternal } from "react-icons/go";
import { motion } from 'framer-motion';

const ProjectBox = ({ project, idx, totalLength }) => {
  return (
    <motion.div className="projectBox" animate={{x: [-200, 0]}} transition={{duration: 2}}>
      <div className="pbImgContainer">
        <img src={project.image} alt={project.name} />
      </div>
      <div className="pbInfoContainer">
        <h2>{project.name}</h2>
        <h4>{project.desc}</h4>
        <h4>
          Date Created: <span>{project.date}</span>
        </h4>
        <a href={project.url} target="__blank">
          View Demo <GoLinkExternal />
        </a>
      </div>
      {(idx === totalLength - 1) || <div className="line"></div>}
    </motion.div>
  );
};

export default ProjectBox;
