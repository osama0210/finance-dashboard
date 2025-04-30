import Header from './components/Header.jsx'
import CrircleChart from './components/CircleChartCard.jsx'
import CoinsOverview from './components/CoinsOverview.jsx'
import Favorite from './components/Favorite.jsx'
import CoinDetails from "./components/CoinDetails.jsx";
import SupMenu from './components/SupMenu.jsx'
import {useState, useEffect} from "react";
import {Routes, Route} from "react-router-dom";


const App = () => {
    const [favourite, setFavourite] = useState([]);
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
            .then(res => res.json())
            .then(data => setCoins(data));
    }, []);

    return (
        <>
            <Header/>
            <div className="content">
                <SupMenu/>

                <Routes>
                    <Route
                        path="/"
                        element={<CoinsOverview favourite={favourite} setFavourite={setFavourite} />}
                    />
                    <Route path={'/coin/:id'} element={<CoinDetails coins={coins} />}></Route>
                    <Route
                        path="/Favorite"
                        element={<Favorite favourite={favourite} />}
                    />
                </Routes>
            </div>
        </>
    );
};


export default App;