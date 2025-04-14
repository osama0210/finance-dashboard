import {useState, useEffect} from "react";
import LinkIcon from "../assets/icons/like.svg";

const coinsOverview = () => {
    // Fetch api
    const url = "https://data-api.coindesk.com/asset/v1/top/list?page=1&page_size=100";
    const [coins, setCoins] = useState(null);
    const [favourite, setFavourite] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data.Data.LIST);
                setCoins(data.Data.LIST);

            })
    }, [])

    if (!coins) {
        return (
            <div>
                loading...
            </div>
        )
    }

    const addCoinFav = (coin) => {
        const coinExist = favourite.some(fav => fav === coin);

        if (!coinExist) {
            const newFavCoins = [...favourite, coin];
            setFavourite(newFavCoins);
            console.log(coin);
        }

    }


    return (
        <div className="coins-overview-container">
            <table className="coins-overview-table">
                <thead>
                <tr className="table-header">
                    <th>Crypto coin</th>
                    <th>Price</th>
                    <th>Change (24h)</th>
                    <th>Favorite</th>
                </tr>
                </thead>
                <tbody>

                {
                    coins.map(coin => {
                        return (
                            <tr key={coin.ID} className="table-body">
                                <td className="coin-name-img">
                                    <img className="coin-img" src={coin.LOGO_URL} alt=""/>
                                    {coin.NAME}</td>
                                <td>${parseFloat(coin.PRICE_USD).toFixed(5)}</td>
                                <td>{parseFloat(coin.SPOT_MOVING_24_HOUR_CHANGE_PERCENTAGE_CONVERSION).toFixed(2)}%</td>
                                <td>
                                    <img onClick={() => addCoinFav(coin.NAME)} src={LinkIcon} alt="Black star icon"/>
                                </td>

                            </tr>
                        )

                    })
                }
                </tbody>
            </table>
        </div>
    );
};


export default coinsOverview;