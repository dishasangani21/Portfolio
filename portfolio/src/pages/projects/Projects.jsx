import "./projects.css";
import { projectData } from "../../assets/projectsData";
import ProjectBox from "../../components/projectBox/ProjectBox";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="projectPage">
      <motion.h1
        className="projectHeading gradient__text"
        animate={{ x: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        PROJECTS
      </motion.h1>
      <div className="projects">
        {projectData &&
          projectData.map((project, idx) => (
            <ProjectBox key={idx} project={project} totalLength={projectData.length} idx={idx} />
          ))}
      </div>
    </div>
  );
};

export default Projects;
