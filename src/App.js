import React from "react";
import './App.css';
import Navbars from "./Components/Navbar/Navbars";
import Card from "./Components/Cards/card";
import {BrowserRouter} from "react-router-dom";
import Shahar from "./Components/Shaharlar/Shahar";

function App() {
    return (<div className="App">
            <BrowserRouter>
                <Navbars/>
                <Switch>
                    <Route path="/shahar" component={Shahar} />
                    <Route path="/not-found" component={NotFound} />
                    <Route path="/" exact component={Home} />
                    <Redirect to="/not-found" />
                </Switch>
            </BrowserRouter>
            <Card/>
        </div>);
}

export default App;
