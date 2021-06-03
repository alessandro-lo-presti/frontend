import { useState, useEffect } from "react";
import { movieApi } from "../../services/ApiServices";
import MovieCard from "../../common/MovieCard";
import {
    Container,
    Grid,
    Typography,
    CircularProgress,
} from "@material-ui/core";

const getNow = () => new Date().getTime();

function Home() {
    console.log("HOME FUNCTION!");
    const [movies, setMovies] = useState([]);
    const [now, setNow] = useState(getNow());
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        let intervalId = null;

        movieApi()
            .then((response) => response.json())
            .then((data) => {
                setMovies(data);
                intervalId = setInterval(() => {
                    setNow(getNow());
                }, 1000);
                setIsLoaded(true);
            })
            .catch((error) => {
                console.log(error);
                setIsLoaded(true);
            });

        return () => {
            if (intervalId) {
                console.log("pulizia home");
                clearInterval(intervalId);
            }
        };
    }, []);

    return (
        <Container maxWidth="md">
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
            >
                {isLoaded ? (
                    movies.filter((movie) => movie.end > now).length > 0 ? (
                        movies
                            .filter((movie) => movie.end > now)
                            .map((movie) => (
                                <MovieCard
                                    key={movie.id}
                                    title={movie.name}
                                    end={movie.end}
                                    now={now}
                                />
                            ))
                    ) : (
                        <Typography variant="h1" component="h2">
                            Non ci sono film disponibili
                        </Typography>
                    )
                ) : (
                    <CircularProgress />
                )}
            </Grid>
        </Container>
    );
}

export default Home;
