const coinsOverview = () => {
    return (
        <div className="table-container">
            <h1 className="tabel-title">Statistics</h1>
            <div className="coins-overview-container">
                <table className="coins-overview-table">
                    <thead>
                    <tr className="table-header">
                        <th>Crypto Coin</th>
                        <th>Price</th>
                        <th>Change (24h)</th>
                        <th>Favorite</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="table-body">
                        <td>Bitcoin</td>
                        <td>$45,000</td>
                        <td>232</td>
                        <td>like</td>
                    </tr>

                    <tr className="table-body">
                        <td>Bitcoin</td>
                        <td>$45,000</td>
                        <td>232</td>
                        <td>like</td>
                    </tr>

                    <tr className="table-body">
                        <td>Bitcoin</td>
                        <td>$45,000</td>
                        <td>232</td>
                        <td>like</td>
                    </tr>

                    <tr className="table-body">
                        <td>Bitcoin</td>
                        <td>$45,000</td>
                        <td>232</td>
                        <td>like</td>
                    </tr>

                    <tr className="table-body">
                        <td>Bitcoin</td>
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