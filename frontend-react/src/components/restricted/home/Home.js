import { CircularProgress, Container, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import MovieCard from "../../../common/MovieCard";
import {
  movieCleanAction,
  movieErrorAction,
  movieSelector,
  movieSuccessAction,
} from "../../../redux/slices/movieSlice";
import { ApiService } from "../../../services/ApiServices.js";

const getNow = () => new Date().getTime();

const mapStateToProps = (state) => ({ movies: movieSelector(state) });

const mapDispatchToProps = (dispatch) => ({
  movieSuccess: (movies) => dispatch(movieSuccessAction(movies)),
  movieError: () => dispatch(movieErrorAction()),
  movieClean: () => dispatch(movieCleanAction()),
});

function Home(props) {
  const { movies, movieSuccess, movieError, movieClean } = props;
  const [now, setNow] = useState(getNow());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    ApiService.movieApi()
      .then((data) => {
        setLoading(false);
        movieSuccess(data);
      })
      .catch((error) => {
        setLoading(false);
        movieError();
      });

    return () => movieClean();
  }, [movieError, movieSuccess, movieClean]);

  useEffect(() => {
    let intervalId = null;
    if (movies && movies.length > 0) {
      intervalId = setInterval(() => {
        const nowTs = getNow();
        setNow(nowTs);
        if (
          movies &&
          movies.filter((movie) => movie.end > nowTs).length === 0
        ) {
          clearInterval(intervalId);
        }
      }, 1000);
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [movies]);

  return (
    <Container maxWidth="md">
      <div className="grid-container">
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
      </div>
    </Container>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
