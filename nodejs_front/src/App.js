import React from 'react';
import Navibar from "./components/Navibar";
import Home from "./components/Home";
import Cart from "./components/Cart"
import {BrowserRouter, Route} from 'react-router-dom';
import PurchaseStatus from "./components/PurchaseStatus";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navibar/>
                <Route exact path={'/'}>
                    <Home/>
                </Route>
                <Route path={'/cart'}>
                    <Cart/>
                </Route>
                <Route path={'/purchase/status'}>
                    <PurchaseStatus/>
                </Route>
            </div>
        </BrowserRouter>
    );
}

export default App;
