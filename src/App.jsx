import Header from './components/Header.jsx'
import CrircleChart from './components/CircleChartCard.jsx'
import CoinsOverview from './components/CoinsOverview.jsx'
import Favorite from './components/Favorite.jsx'
import SupMenu from './components/SupMenu.jsx'
import {useState} from "react";
import {Routes, Route} from "react-router-dom";


const App = () => {
    const [favourite, setFavourite] = useState([]);

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