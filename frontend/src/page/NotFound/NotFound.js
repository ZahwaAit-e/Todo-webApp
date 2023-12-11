import { Link } from "react-router-dom";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div className="not-Found">
      <div className="error-page">
        <h1>404</h1>
      </div>
      <div className="sorry-text">
        <p>That page cannot be found! </p>
      </div>

      <Link className="linkk" to="/Home">
        Back to the homepage...
      </Link>
    </div>
  );
};
export default NotFound;
