import { useState, useEffect } from "react";
import MovieCard from "../../../common/MovieCard";
import {
    Container,
    Grid,
    Typography,
    CircularProgress,
} from "@material-ui/core";
import { movieErrorAction, movieSelector, movieSuccessAction } from "../../../redux/slices/movieSlice";
import { movieApi } from "../../../services/ApiServices";
import { connect } from "react-redux";

const getNow = () => new Date().getTime();

const mapStateToProps = state => ({ movies: movieSelector(state.movies) });
const mapDispatchToProps = dispatch => ({
        movieSuccess: movies => dispatch(movieSuccessAction(movies)),
        movieError: () => dispatch(movieErrorAction),
    });

function Home(props) {
    const {movies, movieSuccess, movieError} = props;
    const [now, setNow] = useState(getNow());
    const loading = false; //todo

    useEffect(() => {
        let intervalId = null;

        movieApi()
            .then(response => response.json())
            .then(data => {
                movieSuccess(data);
                intervalId = setInterval(() => {
                    setNow(getNow());
                }, 1000);
            })
            .catch(movieError);

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
