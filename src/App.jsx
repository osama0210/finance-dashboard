import Header from './components/Header.jsx'
import CrircleChart from './components/CircleChartCard.jsx'
import Favorite from './components/Favorite.jsx'

import {Routes, Route} from "react-router-dom";
// import {useState, useEffect, useRef} from "react";

// const RenderCoins = () => {
//     fetch("https://api.coincap.io/v2/assets")
//         .then(response => {
//             if (response.ok) {
//                 return response.json();
//             }
//         })
//         .then(data => {
//             console.log(data)
//         })
//
// }


const App = () => {

    return (
        <>
            <Header/>
            <Routes>
                <Route path={"/"} element={<CrircleChart/>}></Route>
                <Route path={"/Favorite"} element={<Favorite/>}></Route>
            </Routes>

        </>
    );
};


export default App;