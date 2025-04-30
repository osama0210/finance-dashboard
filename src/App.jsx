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
        fetch("https://data-api.coindesk.com/asset/v1/top/list?page=1&page_size=100")
            .then(res => res.json())
            .then(data => setCoins(data.Data.LIST));
    }, []);

    return (
        <>
            <Header/>
            <div className="content">
                <SupMenu/>

                <Routes>
                    <Route path="/" element={<CrircleChart />} />
                    <Route
                        path="/Statistics"
                        element={<CoinsOverview favourite={favourite} setFavourite={setFavourite} />}
                    />
                    <Route path={'/coin/:uri'} element={<CoinDetails coins={coins} />}></Route>
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