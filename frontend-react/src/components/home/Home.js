import { Component } from "react";
import { movieApi } from "../../services/ApiServices";
import MovieCard from "../../common/MovieCard"
import { Container, Grid } from '@material-ui/core';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }

  componentDidMount(propsPrecedenti) {
    console.log('homecomponentdidmount');
    movieApi()
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({movies: data});
      })
      .catch(error => console.log(error));
  }

  render() {
    console.log("render lista movies", this.state.movies);
    return (
      <Container maxWidth="md">
        <Grid container direction="row" justify="flex-start" alignItems="center">
          {this.state.movies.map(movie => (
            <MovieCard key={movie.id} title={movie.name} end={movie.end}/>
          ))}
        </Grid>
      </Container>
    );
  }
}

export default Home;
