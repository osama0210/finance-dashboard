import {Link} from "react-router-dom";

const SupMenu = () => {
    return (
        <nav className="sub-menu">
            <Link to={'/'}>
                <button className="sub-menu-btn">Charts</button>
            </Link>
            <Link to={'/Statistics'}>
                <button className="sub-menu-btn">Statistics</button>
            </Link>
        </nav>
    )
}

export default SupMenu;