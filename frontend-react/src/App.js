import { createMuiTheme } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import { useMemo } from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";

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

            <Header />
            <Home />
        </ThemeProvider>
    );
}

export default App;
