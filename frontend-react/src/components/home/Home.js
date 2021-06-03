import { useState, useEffect } from "react";
import { movieApi } from "../../services/ApiServices";
import MovieCard from "../../common/MovieCard";
import { Container, Grid } from "@material-ui/core";

const getNow = () => new Date().getTime();

function Home() {
    console.log("HOME FUNCTION!");
    const [movies, setMovies] = useState([]);
    const [now, setNow] = useState(getNow());

    useEffect(() => {
        let intervalId = null;
        movieApi()
            .then((response) => response.json())
            .then((data) => {
                setMovies(data);
                intervalId = setInterval(() => {
                    setNow(getNow());
                }, 1000);
            })
            .catch((error) => console.log(error));

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
                {movies
                    .filter((movie) => movie.end > now)
                    .map((movie) => (
                        <MovieCard
                            key={movie.id}
                            title={movie.name}
                            end={movie.end}
                            now={now}
                        />
                    ))}
            </Grid>
        </Container>
    );
}

export default Home;
