import { Link } from "react-router-dom";
import "./projectBanner.css";

const ProjectBanner = () => {
  return (
      <Link to={"/projects"} className="projectBanner">
          My Projects
    </Link>
  )
}

export default ProjectBanner