import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>This page cannot be found</p>
            <p><Link to="/">Back to Home page!</Link></p>
        </div>
     );
}
 
export default NotFound;