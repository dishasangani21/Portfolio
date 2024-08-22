import { FaCat } from "react-icons/fa"
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
      <div className="notFound">
          <h1 className="gradient__text">Sorry, The page you are looking for is not avilable. <FaCat /></h1>
          <Link to="/">Back to homepage.</Link>
    </div>
  )
}

export default NotFound