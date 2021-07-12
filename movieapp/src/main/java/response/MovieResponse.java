package response;

import model.Movie;

public class MovieResponse {
	private Movie[] movies;

	public Movie[] getMovies() {
		return movies;
	}

	public void setMovies(Movie[] movies) {
		this.movies = movies;
	}

	@Override
	public String toString() {
		return "MovieResponse [movie=" + movies + "]";
	}
}
