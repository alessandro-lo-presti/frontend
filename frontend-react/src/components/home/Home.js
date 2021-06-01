import { useState } from "react";
import Card from "../../common/Card"

function Home() {
  const [movies, setMovies] = useState([
    {title: 'Gattaca', time: 5},
    {title: 'Braveheart', time: 10},
  ]);

  return (
    <div className='cards-container'>
      {movies.map(movie => (
        <Card title={movie.title} time={movie.time}/>
      ))}
    </div>
  );
}

export default Home;
