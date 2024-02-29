import { Link } from "react-router-dom";

const Nav = () => {
    return(
        <div className="navContainer">
            <Link><h3>Current Conditions</h3></Link>
            <Link><h3>Today's Forecast</h3></Link>
        </div>
    );
};

export default Nav;