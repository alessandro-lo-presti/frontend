import { createMuiTheme } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import React, { useMemo } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./components/error/NotFound";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
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
        <Router>
            <ThemeProvider theme={theme}>
                <CssBaseline />

                <Header />

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/ranking">
                        <Ranking />
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </ThemeProvider>
        </Router>
    );
}

export default App;
