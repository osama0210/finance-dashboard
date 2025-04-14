const FavoriteList = ({fav}) => {
    return (
        <div>
            {
                fav.map(favourite => {
                    return (
                        <span key={favourite}>
                            dit is een fav coin: {favourite}
                        </span>
                    )
                })
            }
        </div>
    )
}

export default FavoriteList;