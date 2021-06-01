import { useState, useEffect } from "react";
import { movieApi } from "../../services/ApiServices";
import MovieCard from "../../common/MovieCard"
import { Container, Grid } from '@material-ui/core';

function Home() {
  const [movies, setMovies] = useState([]);
  const [arrayTimeLeft, setArrayTimeLeft] = useState([]);
  const [lockTimer, setLockTimer] = useState(0);

  useEffect(() => {
    movieApi()
      .then(response => response.json())
      .then(data => {
        setLockTimer(1);
        setMovies(data);
        setArrayTimeLeft(data.map(movie => movie.end - new Date()));
      })
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    if(lockTimer)
      timer();
  });

  const timer = () => {
    const movielist = movies;
    const movietimeleft = arrayTimeLeft;

    const interval =setInterval(() => {
      const now = new Date();
      if(movielist.length > 0){
        movielist.forEach((movie, index) => {
          if(movie.end <= now) {
            movielist.splice(index, 1);
            movietimeleft.splice(index, 1);
            setMovies(movielist);
          }
          else {
            movietimeleft[index] = movie.end - now;
          }
          setArrayTimeLeft(movietimeleft);
        });
      }
      else {
        clearInterval(interval);
      }
    }, 1000);
  }

  return (
    <Container maxWidth="md">
      <Grid container direction="row" justify="flex-start" alignItems="center">
        {movies.map((movie, index) => (
          <MovieCard key={movie.id} title={movie.name} end={arrayTimeLeft[index]}/>
        ))}
      </Grid>
    </Container>
  );

}

export default Home;
