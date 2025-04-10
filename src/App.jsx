import Header from './components/Header.jsx'
import CrircleChart from './components/CircleChartCard.jsx'
import CoinsOverview from './components/CoinsOverview.jsx'
import Favorite from './components/Favorite.jsx'
import SupMenu from './components/SupMenu.jsx'

import {Routes, Route} from "react-router-dom";
// import {useState, useEffect, useRef} from "react";


const App = () => {

    return (
        <>
            <Header/>
            <div className="content">
                <SupMenu/>
                <Routes>
                    <Route path={"/"} element={<CrircleChart/>}></Route>
                    <Route path={"/Statistics"} element={<CoinsOverview/>}></Route>
                </Routes>
            </div>

            <Routes>
                <Route path={"/Favorite"} element={<Favorite/>}></Route>
            </Routes>
        </>
    );
};


export default App;