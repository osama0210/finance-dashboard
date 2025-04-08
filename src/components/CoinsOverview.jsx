import {useState, useEffect} from "react";

const coinsOverview = () => {


    // fetch api
    const url = "https://data-api.coindesk.com/asset/v1/top/list?page=1&page_size=100";
    const [coins, setCoins] = useState(null);
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


if(!coins){
    return (
        <div>
            loading...
        </div>
    )
}

        return (
            <div className="table-container">
                <div className="coins-overview-container">
                    <table className="coins-overview-table">
                        <thead>
                        <tr className="table-header">
                            <th>Crypto coin</th>
                            <th></th>
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
                                    <td>{coin.NAME}</td>
                                    <td></td>
                                    <td>$45,000</td>
                                    <td>232</td>
                                    <td>like</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default coinsOverview;