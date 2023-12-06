import { Link } from "react-router-dom";
import "./NotFound.css"
const NotFound =()=>{
  return (
  <div className="not-Found">
    <h2>Sorry</h2>
    <p>that page cannot be found </p>
   <Link className="linkk" to="/Home">Back to the homepage...</Link>
  </div>
  );

}
export default NotFound;