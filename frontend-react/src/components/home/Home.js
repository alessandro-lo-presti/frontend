import { useEffect, useState } from "react";
import { movieApi } from "../../services/ApiServices";
import Card from "../../common/Card"

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
    <div className='cards-container'>
      {movies.map((movie, index) => (
        <Card key={index} title={movie.name} time={movie.id}/>
      ))}
    </div>
  );
}

export default Home;
