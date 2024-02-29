import { Link } from "react-router-dom";

const Nav = () => {
    return(
        <div className="navContainer">
            <Link><h3>Homepage</h3></Link>
            <Link><h3>Current  Forecast</h3></Link>
        </div>
    );
};

export default Nav;