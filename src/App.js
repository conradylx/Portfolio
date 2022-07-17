import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./components";
import Resume from "./components/Resume";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";

import "./App.css";


function App() {
    const onClickRedirect = (url) => {
        var win = window.open(url, '_blank');
        if (win != null) {
            win.focus();
            return <Redirect to='/'/>
        }
    }
    return (
        <React.Fragment>
            <CssBaseline/>
            <Navbar />;
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/resume" component={Resume}/>
                <Route exact path="/github" component={() => {
                    return onClickRedirect("https://www.github.com/conradylx")
                }}/>
                <Route exact path="/contact" component={Contact}/>
            </Switch>
        </React.Fragment>
    );
}

export default App;
