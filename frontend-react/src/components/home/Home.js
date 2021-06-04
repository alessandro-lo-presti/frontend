import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../redux/slices/homeSlice";
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
    const {movies, loading} = useSelector(state => state.movies, state => state.loading);
    const dispatch = useDispatch();
    const [now, setNow] = useState(getNow());

    useEffect(() => {
        let intervalId = null;

        dispatch(getMovies());

        intervalId = setInterval(() => {
            setNow(getNow());
        }, 1000);

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
                {!loading ? (
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
