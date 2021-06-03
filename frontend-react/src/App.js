import { createMuiTheme } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import React, { useMemo } from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Ranking from "./components/ranking/Ranking";

function App() {
    const theme = useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: "dark",
                },
            }),
        []
    );
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <Router>
                <Header />

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/ranking">
                        <Ranking />
                    </Route>
                </Switch>
            </Router>
        </ThemeProvider>
    );
}

export default App;
