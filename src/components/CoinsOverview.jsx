import {useState, useEffect} from "react";

const coinsOverview = () => {
    const url = "https://api.coincap.io/v2/assets";
    const [coins, setCoin] = useState(null);
    useEffect(() => {
        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
                setCoin(data.data);
            })
    }, [])
    return (
        <div className="table-container">
            <div className="coins-overview-container">
                <table className="coins-overview-table">
                    <thead>
                    <tr className="table-header">
                        <th></th>
                        <th></th>
                        <th>Price</th>
                        <th>Change (24h)</th>
                        <th>Favorite</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="table-body">
                        <td>Bitcoin</td>
                        <td></td>
                        <td>$45,000</td>
                        <td>232</td>
                        <td>like</td>
                    </tr>

                    <tr className="table-body">
                        <td>Bitcoin</td>
                        <td></td>
                        <td>$45,000</td>
                        <td>232</td>
                        <td>like</td>
                    </tr>

                    <tr className="table-body">
                        <td>Bitcoin</td>
                        <td></td>
                        <td>$45,000</td>
                        <td>232</td>
                        <td>like</td>
                    </tr>

                    <tr className="table-body">
                        <td>Bitcoin</td>
                        <td></td>
                        <td>$45,000</td>
                        <td>232</td>
                        <td>like</td>
                    </tr>

                    <tr className="table-body">
                        <td>Bitcoin</td>
                        <td></td>
                        <td>$45,000</td>
                        <td>232</td>
                        <td>like</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default coinsOverview;