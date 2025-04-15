import FavoriteList from "./FavoriteList.jsx";

const Favorite = ({ favourite }) => {
    return (
        <div>
            <FavoriteList fav={favourite} />
        </div>
    );
};

export default Favorite;