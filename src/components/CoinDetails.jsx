import {useParams} from "react-router-dom";
import CoinChart from "./CoinChart.jsx";
// import {useState, useEffect} from "react";

const CoinDetails = ({coins}) => {
    const {id} = useParams();

    const coin = coins.find(c => c.id === id);

    if (!coin) return <div>Coin not found</div>;
    return (
        <div className="coin-details-page">
            <div className="coin-info-header">
                <img src={coin.image} alt={coin.name} className="coin-logo"/>

                <div className="coin-info">
                    <h1 className="coin-name">{coin.name}</h1>
                    <div className="coin-symbol">{coin.symbol}</div>

                    <div className="coin-price-row">
                        <span className="coin-price">
                          ${parseFloat(coin.current_price).toFixed(0)}
                        </span>

                        <span
                            className={`coin-change ${coin.price_change_24h >= 0 ? "positive" : "negative"}`}>
                            {coin.price_change_24h >= 0 ? "+" : "-"}
                            {Math.abs(coin.price_change_24h.toFixed(0))} (
                            {coin.price_change_percentage_24h >= 0 ? "+" : "-"}
                            {Math.abs(coin.price_change_percentage_24h.toFixed(2))}%)
                        </span>
                </div>
                <p className="coin-time">
                    As of: {new Date().toLocaleTimeString("en-GB")} GMT+2
                </p>
            </div>
        </div>
    <div className="coin-chart-section">
        <h2>Price history</h2>
        <CoinChart coinId={id}/>
    </div>
</div>
)
    ;
};

export default CoinDetails;