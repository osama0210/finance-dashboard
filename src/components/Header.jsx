import FavouriteIcon from "../assets/icons/favourite.svg";

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <div className="logo-search-container">
                    <h1 className="logo">
                        Flex<span className="logo-letter">Bit</span>
                    </h1>
                    <div className="search-bar-container">
                        <input type="text" placeholder='Search by BitFlex'/>
                    </div>
                </div>
                <div className="like-button-container">
                    <button className="like-btn primary">
                        <img src={FavouriteIcon} alt=""/>
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header;