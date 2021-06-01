import { useEffect, useState } from "react";
import { movieApi } from "../../services/ApiServices";
import MovieCard from "../../common/MovieCard"
import { Container, Grid } from '@material-ui/core';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    movieApi()
      .then(response => response.json())
      .then(data => {
        setMovies(data);
      })
      .catch(error => console.log(error));
  });

  return (
    <Container maxWidth="md">
      <Grid container direction="row" justify="flex-start" alignItems="center">
        {movies.map((movie, index) => (
          <MovieCard key={index} title={movie.name} time={movie.name}/>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;
