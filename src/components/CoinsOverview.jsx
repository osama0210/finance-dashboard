import {useState, useEffect} from "react";
import LinkIcon from "../assets/icons/like.svg";
import {useNavigate} from "react-router-dom";

const CoinsOverview = ({favourite, setFavourite}) => {
    // * Api link
    const url = "https://data-api.coindesk.com/asset/v1/top/list?page=1&page_size=100";
    const [coins, setCoins] = useState(null);
    const [searchItem, setSearchItem] = useState('');
    const [filteredCoins, setFilteredCoins] = useState([]);
    const navigate = useNavigate();

    // * UseEffect to fetch the api.
    useEffect(() => {
        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(data => {
                // Store the API data in the 'coins' state
                setCoins(data.Data.LIST);
                // Set all coins in the 'filteredCoins' state array
                setFilteredCoins(data.Data.LIST);
            })
    }, [])

    // * UseEffect to filter based on search
    useEffect(() => {
        if (!coins) return

        const filtered = coins.filter((coin) => coin.NAME.toLowerCase().includes(searchItem.toLowerCase()));

        setFilteredCoins(filtered);
    }, [searchItem, coins]);


    if (!coins) {
        return (
            <div>
                loading...
            </div>
        )
    }

    // * Targets the user input in the search box
    const handleSearchChange = (e) => {
        setSearchItem(e.target.value);
    }

    const addCoinFav = (coin) => {
        const coinExist = favourite.some(fav => fav === coin);

        if (!coinExist) {
            const newFavCoins = [...favourite, coin];
            setFavourite(newFavCoins);
        }
    }


    return (
        <div className="coins-overview-container">
            <div className="search-bar-container">
                <input
                    className="search-input"
                    type="text"
                    placeholder='Search by BitFlex'
                    value={searchItem}
                    onChange={handleSearchChange}
                />
            </div>
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
                    filteredCoins.map(coin => {
                        return (
                            <tr key={coin.ID} className="table-body">
                                <td
                                    onClick={() => navigate(`/coin/${coin.URI}`)}
                                    className="coin-name-img"
                                >
                                    <img className="coin-img" src={coin.LOGO_URL} alt=""/>
                                    {coin.NAME}
                                </td>
                                <td>${parseFloat(coin.PRICE_USD).toFixed(5)}</td>
                                <td>{parseFloat(coin.SPOT_MOVING_24_HOUR_CHANGE_PERCENTAGE_CONVERSION).toFixed(2)}%</td>
                                <td>
                                    <img onClick={() => addCoinFav(coin.NAME)} src={LinkIcon}
                                         alt="Black star icon"/>
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


export default CoinsOverview;