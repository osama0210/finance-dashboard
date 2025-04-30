import {useState, useEffect} from "react";
import LinkIcon from "../assets/icons/like.svg";
import {useNavigate} from "react-router-dom";

const CoinsOverview = ({favourite, setFavourite}) => {
    // * Api link
    const [coins, setCoins] = useState(null);
    const [searchItem, setSearchItem] = useState('');
    const [filteredCoins, setFilteredCoins] = useState([]);
    const navigate = useNavigate();

    // * UseEffect to fetch the api.
    useEffect(() => {
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
            .then(res => {
                return res.json();
            })
            .then(data => {
                // Store the API data in the 'coins' state
                setCoins(data);
                // Set all coins in the 'filteredCoins' state array
                setFilteredCoins(data);
            })
            .catch(err => {
                console.error("API fetch error:", err);
            });
    }, [])

    // * UseEffect to filter based on search
    useEffect(() => {
        if (!coins) return

        const filtered = coins.filter((coin) => coin.name.toLowerCase().includes(searchItem.toLowerCase()));

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
                            <tr key={coin.id} className="table-body">
                                <td
                                    onClick={() => navigate(`/coin/${coin.id}`)}
                                    className="coin-name-img"
                                >
                                    <img className="coin-img" src={coin.image} alt={coin.name}/>
                                    {coin.name}
                                </td>
                                <td>${parseFloat(coin.current_price).toFixed(5)}</td>
                                <td>{parseFloat(coin.price_change_percentage_24h).toFixed(2)}%</td>
                                <td>
                                    <img onClick={() => addCoinFav(coin.name)} src={LinkIcon}
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