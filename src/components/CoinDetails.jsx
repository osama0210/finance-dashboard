import {useParams} from "react-router-dom";
// import {useState, useEffect} from "react";

const CoinDetails = ({coins}) => {
    const {uri} = useParams();

    const coin = coins.find(c => c.URI === uri);

    if (!coin) return <div>Coin not found</div>;
    return (
        <div className="coin-details-page">
            <div className="coin-info-header">
                <img src={coin.LOGO_URL} alt={coin.NAME} className="coin-logo"/>

                <div className="coin-info">
                    <h1 className="coin-name">{coin.NAME}</h1>
                    <div className="coin-symbol">{coin.SYMBOL}</div>

                    <div className="coin-price-row">
                        <span className="coin-price">${parseFloat(coin.PRICE_USD).toFixed(0)}</span>
                        <span className={`coin-change ${coin.SPOT_MOVING_24_HOUR_CHANGE_CONVERSION >= 0 ? "positive" : "negative"}`}>
                            {coin.SPOT_MOVING_24_HOUR_CHANGE_CONVERSION >= 0 ? "+" : "-"}
                            {Math.abs(coin.SPOT_MOVING_24_HOUR_CHANGE_CONVERSION.toFixed(0))}(
                            {coin.SPOT_MOVING_24_HOUR_CHANGE_PERCENTAGE_CONVERSION >= 0 ? "+" : "-"}
                            {Math.abs((coin.SPOT_MOVING_24_HOUR_CHANGE_PERCENTAGE_CONVERSION * 100).toFixed(2))}%)
                        </span>
                    </div>

                    <p className="coin-time">
                        As of: {new Date().toLocaleTimeString("en-GB")} GMT+2
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CoinDetails;