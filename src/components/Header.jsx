import FavouriteIcon from "../assets/icons/favourite.svg";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <div className="logo-container">
                    <Link to={'/'}>
                        <h1 className="logo">
                            Flex<span className="logo-letter">Bit</span>
                        </h1>
                    </Link>
                </div>
                <div className="like-button-container">
                    <Link to='/Favorite'>
                        <button className="like-btn primary">
                            <img src={FavouriteIcon} alt=""/>
                        </button>
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Header;