import { Component } from "react";
import { movieApi } from "../../services/ApiServices";
import MovieCard from "../../common/MovieCard"
import { Container, Grid } from '@material-ui/core';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      arrayTimeLeft: []
    }
  }

  componentDidMount(propsPrecedenti) {
    console.log('home componentDidMount');
    movieApi()
      .then(response => response.json())
      .then(data => {
        this.setState({movies: data, arrayTimeLeft: data.map(movie => movie.end - new Date())});
        this.timer();
      })
      .catch(error => console.log(error));
  }

  componentDidUpdate() {
    console.log('home componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('home componentWillUnmount');
  }

  timer() {
    const movielist = this.state.movies;
    const movietimeleft = this.state.arrayTimeLeft;

    const interval =setInterval(() => {
      const now = new Date();
      if(movielist.length > 0){
        movielist.forEach((movie, index) => {
          if(movie.end <= now) {
            movielist.splice(index, 1);
            movietimeleft.splice(index, 1);
          }
          else {
            movietimeleft[index] = movie.end - now;
          }
          this.setState({movies: movielist, arrayTimeLeft: movietimeleft});
        });
      }
      else {
        clearInterval(interval);
      }
    }, 1000);
  }

  render() {
    console.log("render lista movies", this.state.movies);
    return (
      <Container maxWidth="md">
        <Grid container direction="row" justify="flex-start" alignItems="center">
          {this.state.movies.map((movie, index) => (
            <MovieCard key={movie.id} title={movie.name} end={this.state.arrayTimeLeft[index]}/>
          ))}
        </Grid>
      </Container>
    );
  }
}

export default Home;
