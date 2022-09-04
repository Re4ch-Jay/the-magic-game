import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>Sorry, can't find that page :(</h1>
            <Link to='/'>Click here! to go to home page</Link>
        </div>
     );
}
 
export default NotFound;