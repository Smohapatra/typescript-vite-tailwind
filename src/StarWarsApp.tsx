import { useState, useEffect } from 'react';
import * as apis from './api';
import './StarWarsApp.css';
import Character from './Character';

type Movie = {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
}

function App() {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    apis.fetchMovieData().then(data => setMovie(data));
  }, [])

  return movie && (
    <section>
      <div className="movie-wrapper">
        <h1 className='movie-header'>{movie.title}</h1>
        <h3>Episode: {movie.episode_id}</h3>
        <h3>Director: {movie.director}</h3>
        <h3>Producer: {movie.producer}</h3>
        <h3>Release Date: {movie.release_date}</h3>
        <div className='opening-statement'>
          <pre>{movie.opening_crawl}</pre>
        </div>
      </div>
      <div className='character-section'>
        <h1>Characters</h1>
        <ul className='character-menu'>
          {movie.characters.map((character, index) => (
            <Character url={character} key={index}/>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default App;
