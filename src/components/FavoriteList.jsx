const FavoriteList = ({fav}) => {
    return (
        <div>
            {fav.map((favourite, index) => (
                <span key={index}>
                    Dit is een fav coin: {favourite}
                    <br/>
                </span>
            ))}
        </div>
    );
};

export default FavoriteList;