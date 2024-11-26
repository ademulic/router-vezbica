import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>
                Error 404    
            </h1>    
            <Link to="/">Go back home</Link>
        </div>
    );
}
 
export default NotFound;