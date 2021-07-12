package api;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import model.Movie;


import response.MovieResponse;

@Path("/movie")
public class MovieApi {
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response movieApi() {
		
		Movie[] movies = new Movie[4];
		movies[0] = new Movie("Braveheart", 1, 1.5f);
		movies[1] = new Movie("Pulp Fiction", 10, 2.5f);
		movies[2] = new Movie("Goodbye Lenin", 100, 3.5f);
		movies[3] = new Movie("Hot Fuzz", 1000, 4.5f);
		
		MovieResponse mr = new MovieResponse();
		mr.setMovies(movies);
		return Response.ok(mr).build();
	}
	
}
